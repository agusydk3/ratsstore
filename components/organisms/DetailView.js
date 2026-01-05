// Organism: Detail View Component
class DetailView {
    static create() {
        const section = document.createElement('section');
        section.id = 'detail-view';
        section.style.display = 'none';

        // Back Button
        const backBtn = Button.createBackButton();
        section.appendChild(backBtn);

        // Detail Content
        const content = document.createElement('div');
        content.className = 'detail-content';
        
        content.innerHTML = `
            <div class="detail-header">
                <h2 id="detail-title"></h2>
            </div>

            <div class="detail-grid">
                <div id="detail-features">
                    <h3>Tín hiệu Mod chi tiết</h3>
                    <ul class="features-list"></ul>
                </div>

                <div class="video-wrapper">
                    <div id="video-container"></div>
                </div>

                <div id="detail-description">
                    <h3>Giới thiệu</h3>
                    <p></p>
                </div>
            </div>

            <div class="detail-actions">
                <a id="detail-discord-link" href="#" target="_blank" rel="noopener noreferrer">Vào Server Discord</a>
                <button id="copy-discord-link" onclick="copyDiscordLink(this)">Sao chép Link</button>
            </div>
        `;

        section.appendChild(content);
        return section;
    }

    static show(game) {
        document.getElementById('main-view').style.display = 'none';
        document.getElementById('detail-view').style.display = 'block';

        // Update title
        const titleEl = document.getElementById('detail-title');
        titleEl.innerHTML = `<a href="${game.link}" target="_blank" rel="noopener noreferrer">${game.name}</a>`;

        // Update features
        const featuresList = document.querySelector('#detail-features .features-list');
        featuresList.innerHTML = '';
        game.note.split(',').forEach(feature => {
            const li = document.createElement('li');
            li.className = 'feature-tag';
            li.textContent = feature.trim();
            featuresList.appendChild(li);
        });

        // Update video
        const videoContainer = document.getElementById('video-container');
        if (game.videoId) {
            videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${game.videoId}" frameborder="0" allowfullscreen></iframe>`;
        }

        // Update description
        document.querySelector('#detail-description p').textContent = game.description;

        // Update discord link
        document.getElementById('detail-discord-link').href = game.discordLink;

        window.scrollTo(0, 0);
    }
}
