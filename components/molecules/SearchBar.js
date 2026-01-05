// Molecule: Search Bar Component
class SearchBar {
    static create() {
        const container = document.createElement('div');
        container.className = 'search-container';
        
        const input = Input.createSearch({
            id: 'searchInput',
            placeholder: 'Dịch chuyển đến game...',
            onKeyUp: renderGameList
        });
        
        container.appendChild(input);
        return container;
    }
}
