// Store Section dengan intro yang lebih menarik
class StoreSection {
    static create() {
        const section = document.createElement('section');
        section.className = 'store-section';
        section.style.cssText = 'padding-top: 6rem;';

        // Hero Title
        const heroTitle = document.createElement('h1');
        heroTitle.style.cssText = `
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 700;
            color: #fff;
            text-align: center;
            margin-bottom: 1rem;
            text-shadow: 0 0 20px var(--primary-accent);
            animation: text-glow 2s ease-in-out infinite alternate;
        `;
        heroTitle.textContent = '🤖 Bot Auto Order 24/7';
        section.appendChild(heroTitle);

        // Subtitle
        const subtitle = document.createElement('p');
        subtitle.className = 'section-subtitle';
        subtitle.style.cssText = 'font-size: 1.3rem; margin-bottom: 1rem;';
        subtitle.textContent = 'Pilih store bot sesuai kebutuhan Anda';
        section.appendChild(subtitle);

        // Quick Info Badges
        const badgesContainer = document.createElement('div');
        badgesContainer.style.cssText = 'display: flex; gap: 1rem; justify-content: center; margin-bottom: 3rem; flex-wrap: wrap;';
        
        const badges = [
            { icon: '⚡', text: 'Otomatis' },
            { icon: '💳', text: 'QRIS' },
            { icon: '💰', text: 'Terjangkau' }
        ];

        badges.forEach(badge => {
            const badgeEl = document.createElement('span');
            badgeEl.style.cssText = `
                background: var(--glass-bg);
                padding: 0.5rem 1.2rem;
                border-radius: 50px;
                border: 1px solid var(--border-color);
                backdrop-filter: blur(10px);
                font-size: 1rem;
                font-weight: 600;
            `;
            badgeEl.innerHTML = `${badge.icon} ${badge.text}`;
            badgesContainer.appendChild(badgeEl);
        });

        section.appendChild(badgesContainer);

        const storeGrid = document.createElement('div');
        storeGrid.className = 'store-grid';
        storeGrid.id = 'store-grid';
        section.appendChild(storeGrid);

        return section;
    }

    static render(stores) {
        const grid = document.getElementById('store-grid');
        if (!grid) return;

        grid.innerHTML = '';

        stores.forEach(store => {
            const card = StoreCard.create(store);
            grid.appendChild(card);
        });
    }
}
