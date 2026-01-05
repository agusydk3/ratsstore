// Template: Footer Component
class Footer {
    static create() {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        const text = document.createElement('p');
        text.textContent = '© 2025 Rats Store. All rights reserved.';
        footer.appendChild(text);

        return footer;
    }
}
