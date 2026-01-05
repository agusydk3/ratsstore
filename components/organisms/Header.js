// Organism: Header Component
class Header {
    static create() {
        const header = document.createElement('header');
        header.className = 'header';

        // Logo
        const logo = Image.createLogo('edenimage.png');
        header.appendChild(logo);

        // User Info (initially hidden)
        const userInfo = this.createUserInfo();
        header.appendChild(userInfo);

        // Title
        const title = document.createElement('h1');
        title.textContent = 'Eden Mod';
        header.appendChild(title);

        // Description
        const description = document.createElement('p');
        description.innerHTML = `
            <b>Không Root:</b> Mod game an toàn, không can thiệp hệ thống.<br>
            <b>Không Phí:</b> Mod chất lượng, miễn phí - vì đam mê.<br>
            <b>Không "Làm màu":</b> Uy tín là hàng đầu, chất lượng là giá trị cốt lõi.<br>
        `;
        header.appendChild(description);

        // Discord Button
        const discordBtn = document.createElement('a');
        discordBtn.href = 'https://discord.gg/edenmod';
        discordBtn.target = '_blank';
        discordBtn.rel = 'noopener noreferrer';
        discordBtn.className = 'discord-button';
        discordBtn.textContent = 'Gia nhập Thiên hà';
        header.appendChild(discordBtn);

        return header;
    }

    static createUserInfo() {
        const userInfo = document.createElement('div');
        userInfo.id = 'user-info';
        userInfo.style.display = 'none';
        userInfo.style.marginBottom = '1rem';

        userInfo.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <img id="user-avatar" width="40" height="40" style="border-radius: 50%; border: 2px solid var(--primary-accent);">
                <span id="username"></span>
                <span class="vip-label" style="display:none" id="vipLabel">VIP</span>
                <span class="thuong-label" style="display:none" id="thuongLabel">Thường</span>
                <button onclick="logout()" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; margin-left: 0.5rem;">
                    ${Icon.logout()}
                </button>
            </div>
        `;

        return userInfo;
    }
}
