<?php require_once 'config.php';

if (!isLoggedIn() || !isAdmin()) {
    redirect('login.php');
}

$message = '';
$messageType = '';

// DELETE
if (isset($_GET['delete'])) {
    $id = (int)$_GET['delete'];
    $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
    $stmt->execute([$id]);
    redirect('admin.php?msg=deleted');
}

// CREATE / UPDATE
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = (int)($_POST['id'] ?? 0);
    $name = trim($_POST['name'] ?? '');
    $description = trim($_POST['description'] ?? '');
    $price = (float)($_POST['price'] ?? 0);
    $badge = trim($_POST['badge'] ?? '');
    $image = trim($_POST['image'] ?? 'media/placeholder.jpg');

    if ($name === '') {
        $message = 'Product name is required.';
        $messageType = 'error';
    } else {
        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE products SET name=?, description=?, price=?, badge=?, image=? WHERE id=?");
            $stmt->execute([$name, $description, $price, $badge ?: null, $image, $id]);
            $message = 'Product updated.';
        } else {
            $stmt = $pdo->prepare("INSERT INTO products (name, description, price, badge, image) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$name, $description, $price, $badge ?: null, $image]);
            $message = 'Product added.';
        }
        $messageType = 'success';
    }
}

if (isset($_GET['msg'])) {
    $message = match($_GET['msg']) {
        'deleted' => 'Product deleted.',
        default => ''
    };
    $messageType = 'success';
}

// READ
$products = $pdo->query("SELECT * FROM products ORDER BY id ASC")->fetchAll();
$stats = $pdo->query("SELECT COUNT(*) as total, AVG(price) as avg_price FROM products")->fetch();

// Edit mode
$editing = null;
if (isset($_GET['edit'])) {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->execute([(int)$_GET['edit']]);
    $editing = $stmt->fetch();
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin — Brand Name</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="admin.css">
</head>
<body>

<header class="admin-header">
    <h1>Admin Panel</h1>
    <div class="admin-header-links">
        <span class="admin-user">Logged as: <?= sanitize($_SESSION['username']) ?></span>
        <a href="index.php">View Site</a>
        <a href="logout.php">Log Out</a>
    </div>
</header>

<div class="admin-container">

    <?php if ($message): ?>
        <div class="alert alert-<?= $messageType ?>"><?= sanitize($message) ?></div>
    <?php endif; ?>

    <!-- Stats -->
    <div class="stats">
        <div class="stat-card">
            <div class="stat-label">Total Products</div>
            <div class="stat-value"><?= (int)$stats['total'] ?></div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Average Price</div>
            <div class="stat-value">$<?= number_format($stats['avg_price'] ?? 0, 2) ?></div>
        </div>
    </div>

    <!-- Form: Add / Edit -->
    <div class="admin-form-section">
        <h2><?= $editing ? 'Edit Product' : 'Add New Product' ?></h2>
        <form method="POST" class="admin-form">
            <input type="hidden" name="id" value="<?= $editing['id'] ?? 0 ?>">
            <div class="form-row">
                <div class="form-group">
                    <label for="name">Product Name *</label>
                    <input type="text" id="name" name="name" required value="<?= sanitize($editing['name'] ?? '') ?>" placeholder="e.g. Product Name">
                </div>
                <div class="form-group">
                    <label for="price">Price ($) *</label>
                    <input type="number" id="price" name="price" step="0.01" min="0" required value="<?= $editing['price'] ?? '' ?>" placeholder="0.00">
                </div>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" id="description" name="description" value="<?= sanitize($editing['description'] ?? '') ?>" placeholder="Short product description">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="badge">Badge</label>
                    <select id="badge" name="badge">
                        <option value="">No badge</option>
                        <option value="Popular" <?= ($editing['badge'] ?? '') === 'Popular' ? 'selected' : '' ?>>Popular</option>
                        <option value="New" <?= ($editing['badge'] ?? '') === 'New' ? 'selected' : '' ?>>New</option>
                        <option value="Sale" <?= ($editing['badge'] ?? '') === 'Sale' ? 'selected' : '' ?>>Sale</option>
                        <option value="Best Seller" <?= ($editing['badge'] ?? '') === 'Best Seller' ? 'selected' : '' ?>>Best Seller</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Image Path</label>
                    <input type="text" id="image" name="image" value="<?= sanitize($editing['image'] ?? '') ?>" placeholder="media/product1.jpg">
                </div>
            </div>
            <div class="form-actions">
                <?php if ($editing): ?>
                    <a href="admin.php" class="btn btn-cancel">Cancel</a>
                <?php endif; ?>
                <button type="submit" class="btn btn-primary"><?= $editing ? 'Save Changes' : 'Add Product' ?></button>
            </div>
        </form>
    </div>

    <!-- Table -->
    <div class="admin-table-section">
        <h2>All Products</h2>
        <?php if (empty($products)): ?>
            <p class="empty-state">No products yet. Add your first product above.</p>
        <?php else: ?>
            <div class="table-responsive">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Badge</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($products as $p): ?>
                        <tr>
                            <td>#<?= $p['id'] ?></td>
                            <td><img class="thumb" src="<?= sanitize($p['image']) ?>" alt="" onerror="this.style.background='#333'"></td>
                            <td><?= sanitize($p['name']) ?></td>
                            <td>$<?= number_format($p['price'], 2) ?></td>
                            <td><?= sanitize($p['badge'] ?? '—') ?></td>
                            <td class="actions">
                                <a href="admin.php?edit=<?= $p['id'] ?>" class="btn btn-sm btn-edit">Edit</a>
                                <a href="admin.php?delete=<?= $p['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Delete this product?')">Delete</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        <?php endif; ?>
    </div>

</div>

</body>
</html>
