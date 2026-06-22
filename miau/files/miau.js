// ===== DATABASE (localStorage) =====
const DB_KEY = 'aromabomb_products';

const defaultProducts = [
    {
        id: 1,
        name: 'Blueberry Borage Tea Bomb',
        price: 8.20,
        badge: 'Popular',
        image: 'media/product1.jpg'
    },
    {
        id: 2,
        name: 'Blue Moon Latte Bomb',
        price: 9.10,
        badge: 'Popular',
        image: 'media/product2.jpg'
    },
    {
        id: 3,
        name: 'Earl Grey Rose Tea Bomb',
        price: 9.10,
        badge: 'Popular',
        image: 'media/product3.jpg'
    },
    {
        id: 4,
        name: 'London Fog Tea Bomb',
        price: 7.50,
        badge: 'Popular',
        image: 'media/product4.jpg'
    }
];

function getProducts() {
    const data = localStorage.getItem(DB_KEY);
    if (!data) {
        localStorage.setItem(DB_KEY, JSON.stringify(defaultProducts));
        return [...defaultProducts];
    }
    return JSON.parse(data);
}

function saveProducts(products) {
    localStorage.setItem(DB_KEY, JSON.stringify(products));
}

function addProduct(product) {
    const products = getProducts();
    product.id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    products.push(product);
    saveProducts(products);
    return product;
}

function updateProduct(id, updates) {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...updates, id };
    saveProducts(products);
    return products[index];
}

function deleteProduct(id) {
    const products = getProducts().filter(p => p.id !== id);
    saveProducts(products);
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const products = getProducts();
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <div class="product-bottom">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart('${product.name}')" aria-label="Add to cart">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== CART NOTIFICATION =====
function addToCart(productName) {
    const notification = document.getElementById('cartNotification');
    const message = document.getElementById('cartMessage');
    if (!notification || !message) return;

    message.textContent = `${productName} added to cart!`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// ===== CAROUSEL =====
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let autoPlayInterval;

    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.carousel-dot').forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    autoPlayInterval = setInterval(nextSlide, 5000);

    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
            resetAutoPlay();
        }
    }, { passive: true });
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .section-header, .products-intro, .testimonials-text, .carousel').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initCarousel();
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
});

// Scroll animation CSS injection
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
    .product-card.animate-on-scroll {
        transition-delay: calc(var(--card-index, 0) * 0.1s);
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card').forEach((card, i) => {
        card.style.setProperty('--card-index', i);
    });
});
