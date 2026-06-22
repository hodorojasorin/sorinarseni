// ===== CART NOTIFICATION =====
function addToCart(name) {
    var n = document.getElementById('cartNotification');
    var m = document.getElementById('cartMessage');
    if (!n || !m) return;
    m.textContent = name + ' added to cart!';
    n.classList.add('show');
    setTimeout(function() { n.classList.remove('show'); }, 2500);
}

// ===== CAROUSEL =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var track = document.getElementById('carouselTrack');
        var dotsBox = document.getElementById('carouselDots');
        if (!track || !dotsBox) return;

        var slides = track.querySelectorAll('.carousel-slide');
        var prevBtn = document.querySelector('.carousel-btn.prev');
        var nextBtn = document.querySelector('.carousel-btn.next');
        var current = 0;
        var timer;

        // Create dots
        for (var i = 0; i < slides.length; i++) {
            var dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.dataset.index = i;
            dot.addEventListener('click', function() {
                goTo(parseInt(this.dataset.index));
                resetAuto();
            });
            dotsBox.appendChild(dot);
        }

        function goTo(idx) {
            current = idx;
            track.style.transform = 'translateX(-' + (idx * 100) + '%)';
            var dots = dotsBox.querySelectorAll('.carousel-dot');
            for (var j = 0; j < dots.length; j++) {
                dots[j].classList.toggle('active', j === idx);
            }
        }

        function next() { goTo((current + 1) % slides.length); }
        function prev() { goTo((current - 1 + slides.length) % slides.length); }

        function resetAuto() {
            clearInterval(timer);
            timer = setInterval(next, 5000);
        }

        if (prevBtn) prevBtn.addEventListener('click', function() { prev(); resetAuto(); });
        if (nextBtn) nextBtn.addEventListener('click', function() { next(); resetAuto(); });

        timer = setInterval(next, 5000);

        // Touch swipe
        var startX = 0;
        track.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function(e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) next(); else prev();
                resetAuto();
            }
        }, { passive: true });
    });
})();

// ===== NAVBAR =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var navbar = document.querySelector('.navbar');
        var hamburger = document.querySelector('.hamburger');
        var mobileMenu = document.querySelector('.mobile-menu');

        window.addEventListener('scroll', function() {
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        });

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });

            var links = mobileMenu.querySelectorAll('a');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        }
    });
})();

// ===== SMOOTH SCROLL =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var anchors = document.querySelectorAll('a[href^="#"]');
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });
})();

// ===== SCROLL ANIMATIONS =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        var els = document.querySelectorAll('.product-card, .section-header, .products-intro, .testimonials-text, .carousel');
        for (var i = 0; i < els.length; i++) {
            els[i].classList.add('animate-on-scroll');
            observer.observe(els[i]);
        }
    });
})();
