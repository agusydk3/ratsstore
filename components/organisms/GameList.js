// Organism: Game List Component
class GameList {
    static create() {
        const section = document.createElement('section');
        section.id = 'gameList';
        return section;
    }

    static render(games) {
        const gameList = document.getElementById('gameList');
        gameList.innerHTML = '';

        if (games.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'Không tìm thấy game nào phù hợp 🌌';
            gameList.appendChild(noResults);
            return;
        }

        games.forEach(game => {
            const card = GameCard.create(game);
            gameList.appendChild(card);
        });
    }
}
