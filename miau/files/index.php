<?php require_once 'config.php';

$stmt = $pdo->query("SELECT * FROM products ORDER BY id ASC");
$products = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TITLE: schimba titlul -->
    <title>Brand Name — Home</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>

<!-- ===== NAVBAR ===== -->
<nav class="navbar">
    <div class="nav-left">
        <!-- MENU: schimba linkurile -->
        <a href="#home">Home</a>
        <a href="#products">Menu</a>
        <a href="#sources">Sources</a>
    </div>
    <div class="nav-logo">
        <!-- LOGO: inlocuieste cu logo-ul tau -->
        <a href="#home">
            <img src="media/logo.png" alt="Logo" class="logo-img">
        </a>
    </div>
    <div class="nav-right">
        <?php if (isLoggedIn()): ?>
            <span class="nav-user">Hi, <?= sanitize($_SESSION['username']) ?></span>
            <?php if (isAdmin()): ?>
                <a href="admin.php" class="nav-link">Admin</a>
            <?php endif; ?>
            <a href="logout.php" class="nav-link">Log out</a>
        <?php else: ?>
            <a href="login.php" class="login-btn">
                Log in
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </a>
        <?php endif; ?>
    </div>
    <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
    </button>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu">
    <a href="#home">Home</a>
    <a href="#products">Menu</a>
    <a href="#sources">Sources</a>
    <?php if (isLoggedIn()): ?>
        <?php if (isAdmin()): ?><a href="admin.php">Admin</a><?php endif; ?>
        <a href="logout.php">Log out</a>
    <?php else: ?>
        <a href="login.php">Log in</a>
        <a href="signup.php">Sign up</a>
    <?php endif; ?>
</div>

<!-- ===== HERO ===== -->
<section class="hero" id="home">
    <!-- HERO BG: schimba imaginea de fundal -->
    <div class="hero-bg" style="background-image: url('media/hero-bg.jpg')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <!-- HERO IMAGE: schimba imaginea principala -->
        <img src="media/hero-main.png" alt="Hero" class="hero-main-img">
        <!-- HERO TEXT: schimba textul -->
        <h1>Your Headline<br>Goes Here !</h1>
        <a href="#products" class="btn-outline">Learn more</a>
    </div>
</section>

<!-- ===== SECTION 3 — PRODUCTS (din baza de date) ===== -->
<section class="products" id="products">
    <div class="section-header">
        <!-- SECTION TITLE: schimba titlul sectiunii -->
        <h2>Our Products</h2>
        <div class="section-line"></div>
    </div>
    <div class="products-intro">
        <!-- SECTION DESCRIPTION: schimba descrierea -->
        <p>Discover our exclusive collection of products, crafted to elevate your experience. Choose from individual items or curated sets to find your perfect match.</p>
        <a href="#" class="btn-outline">View Menu</a>
    </div>
    <div class="products-grid">
        <?php foreach ($products as $product): ?>
        <div class="product-card">
            <div class="product-image">
                <img src="<?= sanitize($product['image']) ?>" alt="<?= sanitize($product['name']) ?>">
                <?php if ($product['badge']): ?>
                    <span class="product-badge"><?= sanitize($product['badge']) ?></span>
                <?php endif; ?>
            </div>
            <div class="product-info">
                <p class="product-name"><?= sanitize($product['name']) ?></p>
                <div class="product-bottom">
                    <span class="product-price">$<?= number_format($product['price'], 2) ?></span>
                    <button class="btn-add" onclick="addToCart('<?= sanitize($product['name']) ?>')" aria-label="Add">+</button>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- ===== TEA LOVERS / SOURCES ===== -->
<section class="testimonials" id="sources">
    <div class="section-header">
        <!-- SECTION TITLE: schimba titlul -->
        <h2>Section Title</h2>
        <div class="section-line"></div>
    </div>
    <!-- SECTION DESCRIPTION: schimba textul -->
    <p class="testimonials-text">Our products are carefully sourced from renowned regions around the world to offer you, our valued customer, an exceptional experience.</p>

    <div class="carousel">
        <div class="carousel-track" id="carouselTrack">
            <!-- SLIDES: adauga/sterge slide-uri, schimba imaginile -->
            <div class="carousel-slide"><img src="media/slide1.jpg" alt="Slide 1"></div>
            <div class="carousel-slide"><img src="media/slide2.jpg" alt="Slide 2"></div>
            <div class="carousel-slide"><img src="media/slide3.jpg" alt="Slide 3"></div>
            <div class="carousel-slide"><img src="media/slide4.jpg" alt="Slide 4"></div>
            <div class="carousel-slide"><img src="media/slide5.jpg" alt="Slide 5"></div>
        </div>
        <div class="carousel-controls">
            <button class="carousel-btn prev" aria-label="Previous">&larr;</button>
            <div class="carousel-dots" id="carouselDots"></div>
            <button class="carousel-btn next" aria-label="Next">&rarr;</button>
        </div>
    </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
    <div class="footer-content">
        <!-- FOOTER: schimba numele si email-ul -->
        <p class="footer-name">Nume Prenume</p>
        <p class="footer-email">email@exemplu.com</p>
    </div>
    <div class="footer-bottom">
        <p>&copy; <?= date('Y') ?> Brand Name. All rights reserved.</p>
    </div>
</footer>

<!-- Cart Notification -->
<div class="cart-notification" id="cartNotification">
    <span id="cartMessage"></span>
</div>

<script src="script.js"></script>
</body>
</html>
