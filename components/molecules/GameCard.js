// Molecule: Game Card Component
class GameCard {
    static create(game) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.setProperty('--status-color', this.getStatusColor(game.status));
        card.onclick = () => showDetailView(game);

        // Image
        const img = Image.createGameImage(game.image, game.name);
        card.appendChild(img);

        // Title
        const title = document.createElement('h3');
        title.textContent = game.name;
        card.appendChild(title);

        // Status Info
        const statusInfo = this.createInfoItem(Icon.status(), 'Trạng thái', game.status);
        card.appendChild(statusInfo);

        // Link Info
        const linkInfo = this.createInfoItem(Icon.link(), 'Link', game.link);
        card.appendChild(linkInfo);

        // Features
        const features = this.createFeatures(game.note);
        card.appendChild(features);

        // Rating
        const rating = this.createRating(game);
        card.appendChild(rating);

        return card;
    }

    static createInfoItem(icon, label, value) {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.innerHTML = `
            <div class="icon-wrapper">${icon}</div>
            <span><strong>${label}:</strong> <span class="status">${value}</span></span>
        `;
        return div;
    }

    static createFeatures(note) {
        const wrapper = document.createElement('div');
        wrapper.className = 'features-wrapper';
        
        const strong = document.createElement('strong');
        strong.textContent = 'Tín hiệu Mod:';
        wrapper.appendChild(strong);

        const ul = document.createElement('ul');
        ul.className = 'features-list';
        
        const features = note.split(',').map(f => f.trim());
        features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'feature-tag';
            li.textContent = feature;
            ul.appendChild(li);
        });

        wrapper.appendChild(ul);
        return wrapper;
    }

    static createRating(game) {
        const div = document.createElement('div');
        div.className = 'rating-info';
        
        const avgRating = game.avgRating || 0;
        const totalRatings = game.totalRatings || 0;
        
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star ${i <= avgRating ? '' : 'empty'}">${Icon.star(i <= avgRating)}</span>`;
        }
        
        div.innerHTML = `
            ${starsHTML}
            <span class="rating-text">(${avgRating.toFixed(1)} - ${totalRatings} đánh giá)</span>
            <button class="rating-button" onclick="openRatingModal('${game.name}'); event.stopPropagation();">Đánh giá</button>
        `;
        
        return div;
    }

    static getStatusColor(status) {
        const colors = {
            'Hoạt động': 'var(--status-ok)',
            'Đang cập nhật': 'var(--status-updating)',
            'Tạm dừng': 'var(--status-stopped)'
        };
        return colors[status] || 'var(--status-ok)';
    }
}
