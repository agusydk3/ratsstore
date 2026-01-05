// Molecule: Top Game Card Component (for sidebar)
class TopGameCard {
    static create(game, index) {
        const card = document.createElement('div');
        card.className = 'top-game-card';
        card.onclick = () => showDetailView(game);

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;
        card.appendChild(img);

        const info = document.createElement('div');
        info.className = 'top-game-info';
        
        const title = document.createElement('h4');
        title.textContent = `${index + 1}. ${game.name}`;
        info.appendChild(title);

        const stars = document.createElement('div');
        stars.className = 'stars';
        const avgRating = game.avgRating || 0;
        stars.textContent = Icon.star(true).repeat(Math.floor(avgRating)) + 
                           Icon.star(false).repeat(5 - Math.floor(avgRating));
        info.appendChild(stars);

        card.appendChild(info);
        return card;
    }
}
