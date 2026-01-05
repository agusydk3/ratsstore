// Molecule: Filter Buttons Component
class FilterButtons {
    static create() {
        const container = document.createElement('div');
        container.className = 'filter-container';
        container.id = 'filterContainer';

        const filters = [
            { text: 'Tất cả game', status: 'all' },
            { text: 'Top Review', status: 'top-review' },
            { text: 'VIP', status: 'vip' }
        ];

        filters.forEach(filter => {
            const btn = Button.createFilterButton(filter.text, filter.status);
            container.appendChild(btn);
        });

        return container;
    }
}
