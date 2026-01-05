// Atom: Button Component
class Button {
    static create({ text, onClick, className = '', icon = '' }) {
        const button = document.createElement('button');
        button.className = className;
        button.textContent = text;
        if (icon) {
            button.innerHTML = icon + ' ' + text;
        }
        if (onClick) {
            button.onclick = onClick;
        }
        return button;
    }

    static createFilterButton(text, status) {
        return this.create({
            text,
            className: 'filter-btn',
            onClick: (e) => filterByStatus(e, status)
        });
    }

    static createBackButton() {
        return this.create({
            text: 'Quay lại vũ trụ',
            className: 'back-button',
            onClick: showMainView,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>`
        });
    }
}
