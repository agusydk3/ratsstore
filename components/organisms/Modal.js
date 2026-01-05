// Organism: Modal Component
class Modal {
    static createRatingModal() {
        const modal = document.createElement('div');
        modal.id = 'ratingModal';
        modal.className = 'modal';

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="closeRatingModal()">×</span>
                <h3 id="ratingGameTitle"></h3>
                <div class="stars-container">
                    <span class="star" onclick="updateRating(1)">★</span>
                    <span class="star" onclick="updateRating(2)">★</span>
                    <span class="star" onclick="updateRating(3)">★</span>
                    <span class="star" onclick="updateRating(4)">★</span>
                    <span class="star" onclick="updateRating(5)">★</span>
                </div>
                <p id="ratingError" style="color: var(--status-stopped); text-align: center; margin: 0.5rem 0; display: none;">
                    Vui lòng chọn số sao và nhập nhận xét!
                </p>
                <div style="margin: 1rem 0;">
                    <textarea id="ratingComment" placeholder="Nhận xét của bạn về game này (bắt buộc)..." 
                        style="width: 100%; padding: 10px; border-radius: 8px; background: rgba(0,0,0,0.2); 
                        border: 1px solid var(--border-color); color: var(--text-primary); min-height: 80px;"></textarea>
                </div>
                <button id="submitRatingBtn" onclick="submitRating()" 
                    style="width: 100%; padding: 12px; background: var(--primary-accent); color: white; 
                    border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Gửi đánh giá</button>
                <p id="ratingStatus" class="rating-status"></p>
            </div>
        `;

        return modal;
    }

    static createDiscordLoginModal() {
        const modal = document.createElement('div');
        modal.id = 'discordLoginModal';
        modal.className = 'modal';

        modal.innerHTML = `
            <div class="modal-content">
                <h3>Đăng nhập bằng Discord</h3>
                <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">
                    Bạn cần đăng nhập để đánh giá "<span id="gameToRateName"></span>"
                </p>
                <button class="discord-login-button" onclick="loginWithDiscord()">
                    Đăng nhập với Discord
                </button>
                <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;">
                    Sau khi đăng nhập, bạn sẽ được chuyển hướng trở lại để đánh giá game.
                </p>
            </div>
        `;

        return modal;
    }
}
