// Marketplace Logic & UI Controller
import { db, doc, updateDoc, addDoc, collection, runTransaction } from '../core/firebase.js';

/**
 * Initializes Marketplace window bindings and event handlers
 * @param {object} options Configuration callbacks and getters
 */
export function initMarketplace({ getContext, showToast, showConfirmModal, trackMissionProgress, renderCardTemplate }) {
    let cardToSell = null;

    window.renderMarketUI = () => {
        const { allMarketListings, charMap } = getContext();
        const grid = document.getElementById('marketGrid');
        if (!grid) return;
        const search = document.getElementById('marketSearch')?.value.trim().toLowerCase() || '';
        const rarity = document.getElementById('marketFilterRarity')?.value || 'all';
        const sort = document.getElementById('marketSort')?.value || 'newest';

        let filtered = (allMarketListings || []).filter(m => {
            const c = charMap[m.cardId];
            if (!c) return false;
            if (search && !c.name.toLowerCase().includes(search) && !c.series.toLowerCase().includes(search)) return false;
            if (rarity !== 'all' && c.rarity !== rarity) return false;
            return true;
        });

        if (sort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
        else if (sort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
        else filtered.sort((a, b) => b.createdAt - a.createdAt);

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <h3>ยังไม่มีการ์ดวางขายในตลาดขณะนี้</h3>
                    <p>คุณสามารถเป็นคนแรกที่นำการ์ดซ้ำหรือการ์ดสะสมมาตั้งขายได้!</p>
                </div>`;
            return;
        }

        grid.innerHTML = filtered.map(m => {
            const c = charMap[m.cardId];
            return renderCardTemplate(c, m, 'market');
        }).join('');
    };

    window.openSellModal = (inventoryDocId) => {
        const { myInventoryDocs, charMap } = getContext();
        const inv = myInventoryDocs.find(i => i.id === inventoryDocId);
        if (!inv) return;
        if (inv.isListed) return alert("⚠️ การ์ดใบนี้กำลังวางขายอยู่ในตลาดแล้ว");

        cardToSell = inv;
        const c = charMap[inv.cardId];
        document.getElementById('sellCardPreview').innerHTML = `
            <div style="background:#111728; padding:12px; border-radius:12px; display:flex; align-items:center; gap:12px;">
                <div style="font-size:24px;">🎴</div>
                <div>
                    <div style="font-weight:800; color:#fff;">${c.name} (${c.rarity})</div>
                    <div style="font-size:12px; color:var(--text-muted);">${c.series} • ${c.element} • ${c.role}</div>
                </div>
            </div>`;
        document.getElementById('sellPriceInput').value = '';
        document.getElementById('sellModal').style.display = 'flex';
    };

    window.closeSellModal = () => {
        document.getElementById('sellModal').style.display = 'none';
        cardToSell = null;
    };

    window.confirmListCard = async () => {
        const { currentUser } = getContext();
        if (!cardToSell || !currentUser) return;
        const price = parseInt(document.getElementById('sellPriceInput').value);
        if (isNaN(price) || price < 10) return alert("⚠️ กรุณากำหนดราคาขั้นต่ำ 10 Gems ครับ");

        try {
            const invRef = doc(db, "animeInventory", cardToSell.id);
            await updateDoc(invRef, { isListed: true });

            await addDoc(collection(db, "animeMarket"), {
                sellerUid: currentUser.uid,
                sellerUsername: currentUser.email.split('@')[0],
                inventoryDocId: cardToSell.id,
                cardId: cardToSell.cardId,
                price: price,
                status: 'active',
                createdAt: Date.now()
            });

            alert("✅ นำการ์ดขึ้นตลาดเรียบร้อยแล้ว!");
            window.closeSellModal();
            if (typeof trackMissionProgress === 'function') {
                trackMissionProgress('marketListCount', 1);
            }
        } catch (err) {
            alert("เกิดข้อผิดพลาด: " + err.message);
        }
    };

    window.cancelListing = async (listingId, inventoryDocId) => {
        const confirmed = await showConfirmModal({
            title: "📦 ยกเลิกการขาย",
            message: "ต้องการยกเลิกการขายการ์ดใบนี้และดึงกลับเข้าคลังของคุณหรือไม่?",
            icon: "📦",
            okText: "ยืนยันยกเลิก"
        });
        if (!confirmed) return;

        try {
            await updateDoc(doc(db, "animeMarket", listingId), { status: 'cancelled' });
            await updateDoc(doc(db, "animeInventory", inventoryDocId), { isListed: false });
            showToast("✅ ยกเลิกการขายเรียบร้อยแล้ว การ์ดกลับเข้าคลังของคุณแล้ว", "success");
        } catch (err) {
            showToast("เกิดข้อผิดพลาด: " + err.message, "error");
        }
    };

    window.buyMarketCard = async (listingId) => {
        const { currentUser, allMarketListings, charMap, userGems } = getContext();
        if (!currentUser) return alert("⚠️ กรุณาเข้าสู่ระบบก่อนครับ");
        const listing = allMarketListings.find(m => m.id === listingId);
        if (!listing) return alert("❌ ไม่พบรายการนี้");
        if (listing.sellerUid === currentUser.uid) return alert("⚠️ นี่คือการ์ดที่คุณตั้งขายเอง");
        if (userGems < listing.price) return alert(`❌ Gems ไม่พอซื้อ (ต้องการ 💎 ${listing.price} Gems แต่คุณมี 💎 ${userGems} Gems)`);

        const c = charMap[listing.cardId];
        const confirmed = await showConfirmModal({
            title: `🛒 ยืนยันการซื้อการ์ด`,
            message: `คุณต้องการซื้อ <b>${c.name} (${c.rarity})</b> ในราคา 💎 <b>${listing.price} Gems</b> จากตลาดหรือไม่?`,
            okText: `ยืนยันการซื้อ`
        });
        if (!confirmed) return;

        try {
            await runTransaction(db, async (t) => {
                const marketRef = doc(db, "animeMarket", listingId);
                const marketSnap = await t.get(marketRef);
                if (!marketSnap.exists() || marketSnap.data().status !== 'active') {
                    throw new Error("ขออภัย การ์ดใบนี้ถูกซื้อหรือยกเลิกไปแล้ว");
                }

                const buyerUserRef = doc(db, "animeUsers", currentUser.uid);
                const buyerSnap = await t.get(buyerUserRef);
                const currentBuyerGems = buyerSnap.data().gems || 0;
                if (currentBuyerGems < listing.price) throw new Error("Gems ไม่เพียงพอ");

                const sellerUserRef = doc(db, "animeUsers", listing.sellerUid);
                const sellerSnap = await t.get(sellerUserRef);
                const currentSellerGems = sellerSnap.exists() ? (sellerSnap.data().gems || 0) : 0;

                const invRef = doc(db, "animeInventory", listing.inventoryDocId);

                // Execute atomic transfers
                t.update(buyerUserRef, { gems: currentBuyerGems - listing.price });
                t.update(sellerUserRef, { gems: currentSellerGems + listing.price });
                t.update(invRef, {
                    uid: currentUser.uid,
                    username: currentUser.email.split('@')[0],
                    isListed: false,
                    transferredAt: Date.now()
                });
                t.update(marketRef, {
                    status: 'sold',
                    buyerUid: currentUser.uid,
                    soldAt: Date.now()
                });
            });

            alert(`🎉 ยินดีด้วย! คุณได้รับ ${c.name} เข้าคลังเรียบร้อยแล้ว!`);
        } catch (err) {
            alert("❌ ทำรายการไม่สำเร็จ: " + err.message);
        }
    };
}
