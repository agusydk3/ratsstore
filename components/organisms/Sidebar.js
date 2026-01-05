// Organism: Sidebar Component
class Sidebar {
    static create() {
        const sidebar = document.createElement('aside');
        sidebar.id = 'sidebar';

        const title = document.createElement('h2');
        title.textContent = '⭐ Top Đánh Giá';
        sidebar.appendChild(title);

        const list = document.createElement('div');
        list.id = 'top-games-list';
        sidebar.appendChild(list);

        return sidebar;
    }

    static updateTopGames(games) {
        const list = document.getElementById('top-games-list');
        list.innerHTML = '';

        const topGames = games
            .filter(g => g.avgRating > 0)
            .sort((a, b) => b.avgRating - a.avgRating)
            .slice(0, 10);

        topGames.forEach((game, index) => {
            const card = TopGameCard.create(game, index);
            list.appendChild(card);
        });
    }
}
