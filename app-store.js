// Store App Configuration
const storesData = [
    {
        name: "Rats Store Bot",
        description: "Jual CloudPhone, Kode Redeem VmosCloud & VsPhone, dan Transfer Device LDPlayer. Solusi terbaik untuk kebutuhan virtual phone dan emulator Android Anda dengan harga terjangkau.",
        icon: "📱",
        image: "rats.png",
        link: "https://t.me/ratsstorebot?start=_tgr_Bg6X7YE4MTRl",
        products: [
            "VmosCloud (Kode Redeem)",
            "VsPhone (Kode Redeem)",
            "LDPlayer (Transfer Device)"
        ],
        stats: {
            products: "3+ Produk",
            rating: "⭐⭐⭐⭐⭐"
        }
    },
    {
        name: "Dunia GSuite Bot",
        description: "Jual akun Google Workspace (GSuite) dengan berbagai paket durasi: 1 hari, 3 hari, dan 7 hari. Akun berkualitas dengan harga terjangkau untuk kebutuhan bisnis dan pribadi.",
        icon: "📧",
        image: "duniagsuite.png",
        link: "https://t.me/duniagsuitebot?start=_tgr_XKtibN1mODdl",
        products: [
            "GSuite 1 Hari",
            "GSuite 3 Hari",
            "GSuite 7 Hari"
        ],
        stats: {
            products: "3 Paket",
            rating: "⭐⭐⭐⭐⭐"
        }
    }
];

// Initialize Store App - Optimized for fast loading
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader immediately after DOM is ready
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('loaded');
        }
    }, 300);
    
    initializeStoreApp();
    setupStoreEventListeners();
});

function initializeStoreApp() {
    const app = document.getElementById('app');
    
    // Create Store Section (langsung tanpa header)
    const storeSection = StoreSection.create();
    app.appendChild(storeSection);
    
    // Create Features Section
    const featuresSection = createFeaturesSection();
    app.appendChild(featuresSection);
    
    // Create Footer
    const footer = Footer.create();
    app.appendChild(footer);
    
    // Render stores
    StoreSection.render(storesData);
}

function createStoreHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    // Use a generic logo or create a combined logo
    const logo = Image.createLogo('eden-og-image.png');
    header.appendChild(logo);

    const title = document.createElement('h1');
    title.textContent = 'Digital Store Hub';
    header.appendChild(title);

    const tagline = document.createElement('p');
    tagline.style.cssText = 'font-size: 1.5rem; color: var(--primary-accent); font-weight: 600; margin-top: 0.5rem;';
    tagline.textContent = 'Your Trusted Digital Solution';
    header.appendChild(tagline);

    const description = document.createElement('p');
    description.style.cssText = 'margin-top: 1.5rem; max-width: 700px;';
    description.innerHTML = `
        Pilih store bot sesuai kebutuhan Anda<br>
        CloudPhone, Virtual Phone, Emulator & GSuite Account
    `;
    header.appendChild(description);

    // Quick Stats
    const statsContainer = document.createElement('div');
    statsContainer.style.cssText = 'display: flex; gap: 2rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;';
    
    const stats = [
        { icon: '⚡', label: 'Pengiriman Otomatis' },
        { icon: '💳', label: 'QRIS Payment' },
        { icon: '🎯', label: 'Harga Terjangkau' }
    ];

    stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.style.cssText = 'background: var(--glass-bg); padding: 1rem 1.5rem; border-radius: 50px; border: 1px solid var(--border-color); backdrop-filter: blur(10px);';
        statItem.innerHTML = `<span style="font-size: 1.5rem;">${stat.icon}</span> <span style="margin-left: 0.5rem; font-weight: 600;">${stat.label}</span>`;
        statsContainer.appendChild(statItem);
    });

    header.appendChild(statsContainer);

    return header;
}

function createFeaturesSection() {
    const section = document.createElement('section');
    section.className = 'features-section';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = '✨ Kenapa Pilih Kami?';
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'features-grid';

    const features = [
        {
            icon: '🚀',
            title: 'Pesanan Dikirim Otomatis',
            description: 'Produk langsung dikirim setelah pembayaran berhasil'
        },
        {
            icon: '💳',
            title: 'Pembayaran QRIS',
            description: 'Terima semua metode pembayaran via QRIS'
        },
        {
            icon: '💰',
            title: 'Harga Terjangkau',
            description: 'Harga kompetitif dan paket fleksibel'
        },
        {
            icon: '✅',
            title: 'Aman & Terpercaya',
            description: 'Produk original dan bergaransi'
        }
    ];

    features.forEach(feature => {
        const item = document.createElement('div');
        item.className = 'feature-item';
        item.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h4>${feature.title}</h4>
            <p>${feature.description}</p>
        `;
        grid.appendChild(item);
    });

    section.appendChild(grid);
    return section;
}

function setupStoreEventListeners() {
    // Scroll to top button
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Initialize galaxy background with delay to improve initial load
    setTimeout(() => {
        initGalaxyBackground();
    }, 100);
}

// Galaxy Background (optimized version)
function initGalaxyBackground() {
    const canvas = document.getElementById('galaxy-bg');
    if (!canvas || typeof THREE === 'undefined') {
        console.log('Three.js not loaded or canvas not found');
        return;
    }
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;
    
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.7,
        transparent: true
    });
    
    const starsVertices = [];
    // Reduced stars for better performance
    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
