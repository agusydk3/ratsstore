// Molecule: Store Card Component
class StoreCard {
    static create(store) {
        const card = document.createElement('div');
        card.className = 'store-card';

        // Store Icon/Image - Use image if available, otherwise use emoji icon
        const iconContainer = document.createElement('div');
        iconContainer.className = 'store-icon';
        
        if (store.image) {
            const img = document.createElement('img');
            img.src = store.image;
            img.alt = store.name;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 50%;';
            img.onerror = function() {
                // Fallback to emoji if image fails to load
                this.style.display = 'none';
                iconContainer.innerHTML = store.icon || '🏪';
            };
            iconContainer.appendChild(img);
        } else {
            iconContainer.innerHTML = store.icon || '🏪';
        }
        
        card.appendChild(iconContainer);

        // Store Info
        const info = document.createElement('div');
        info.className = 'store-info';

        const title = document.createElement('h3');
        title.textContent = store.name;
        info.appendChild(title);

        const description = document.createElement('p');
        description.textContent = store.description;
        info.appendChild(description);

        // Products List
        if (store.products && store.products.length > 0) {
            const productsTitle = document.createElement('h4');
            productsTitle.textContent = 'Produk Tersedia:';
            productsTitle.style.cssText = 'color: var(--primary-accent); margin-top: 1rem; margin-bottom: 0.5rem; font-size: 1rem;';
            info.appendChild(productsTitle);

            const productsList = document.createElement('ul');
            productsList.style.cssText = 'list-style: none; padding: 0; margin: 0;';
            
            store.products.forEach(product => {
                const li = document.createElement('li');
                li.style.cssText = 'color: var(--text-secondary); padding: 0.3rem 0; font-size: 0.95rem;';
                li.innerHTML = `✓ ${product}`;
                productsList.appendChild(li);
            });
            
            info.appendChild(productsList);
        }

        // Store Stats
        if (store.stats) {
            const stats = document.createElement('div');
            stats.className = 'store-stats';
            stats.innerHTML = `
                <span>📦 ${store.stats.products}</span>
                <span>${store.stats.rating}</span>
            `;
            info.appendChild(stats);
        }

        card.appendChild(info);

        // Telegram Button
        const button = document.createElement('button');
        button.className = 'telegram-button';
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.84 8.673c-.139.623-.5.777-1.016.484l-2.804-2.066-1.353 1.302c-.15.15-.275.275-.563.275l.201-2.847 5.185-4.683c.225-.2-.049-.312-.35-.112l-6.408 4.037-2.76-.863c-.6-.187-.612-.6.125-.889l10.783-4.156c.5-.187.937.112.775.889z"/>
            </svg>
            Buka Store Bot
        `;
        button.onclick = (e) => {
            e.stopPropagation();
            window.open(store.link, '_blank');
        };
        card.appendChild(button);

        return card;
    }
}
