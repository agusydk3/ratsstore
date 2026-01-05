// Organism: Controls Panel Component (Filter + Search)
class ControlsPanel {
    static create() {
        const section = document.createElement('section');
        section.className = 'controls-container';

        // Filter Buttons
        const filterButtons = FilterButtons.create();
        section.appendChild(filterButtons);

        // Search Bar
        const searchBar = SearchBar.create();
        section.appendChild(searchBar);

        return section;
    }
}
