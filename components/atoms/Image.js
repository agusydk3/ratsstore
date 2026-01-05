// Atom: Image Component
class Image {
    static create({ src, alt, className = '', onError }) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.className = className;
        if (onError) {
            img.onerror = onError;
        }
        return img;
    }

    static createGameImage(src, alt) {
        return this.create({
            src,
            alt,
            className: 'game-card-image'
        });
    }

    static createLogo(src) {
        return this.create({
            src,
            alt: 'Eden Mod Logo',
            className: 'header-logo',
            onError: function() { this.style.display = 'none'; }
        });
    }
}
