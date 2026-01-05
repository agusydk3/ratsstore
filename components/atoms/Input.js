// Atom: Input Component
class Input {
    static createSearch({ id, placeholder, onKeyUp }) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = id;
        input.placeholder = placeholder;
        if (onKeyUp) {
            input.onkeyup = onKeyUp;
        }
        return input;
    }

    static createTextarea({ id, placeholder, rows = 3 }) {
        const textarea = document.createElement('textarea');
        textarea.id = id;
        textarea.placeholder = placeholder;
        textarea.rows = rows;
        return textarea;
    }
}
