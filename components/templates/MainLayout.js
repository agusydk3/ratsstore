// Template: Main Layout
class MainLayout {
    static create() {
        const container = document.createElement('div');
        container.className = 'container';

        const mainLayout = document.createElement('div');
        mainLayout.className = 'main-layout';

        // Sidebar
        const sidebar = Sidebar.create();
        mainLayout.appendChild(sidebar);

        // Content Wrapper
        const contentWrapper = document.createElement('div');
        contentWrapper.id = 'content-wrapper';

        // Main View
        const mainView = document.createElement('main');
        mainView.id = 'main-view';

        // Store Section (NEW)
        const storeSection = StoreSection.create();
        mainView.appendChild(storeSection);

        // Controls Panel
        const controlsPanel = ControlsPanel.create();
        mainView.appendChild(controlsPanel);

        // Game Counter
        const gameCounter = document.createElement('div');
        gameCounter.id = 'gameCounter';
        gameCounter.className = 'game-counter';
        mainView.appendChild(gameCounter);

        // Game List
        const gameList = GameList.create();
        mainView.appendChild(gameList);

        contentWrapper.appendChild(mainView);

        // Detail View
        const detailView = DetailView.create();
        contentWrapper.appendChild(detailView);

        mainLayout.appendChild(contentWrapper);
        container.appendChild(mainLayout);

        return container;
    }
}
