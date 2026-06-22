CREATE DATABASE IF NOT EXISTS `exemplu` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `exemplu`;

-- Utilizatori
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('admin','user') DEFAULT 'user',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Produse (sectiunea 3)
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    `badge` VARCHAR(50) DEFAULT NULL,
    `image` VARCHAR(255) DEFAULT 'media/placeholder.jpg',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Admin implicit (parola: admin123)
INSERT INTO `users` (`username`, `email`, `password`, `role`) VALUES
('admin', 'admin@exemplu.com', '$2y$12$7fF/AEN7RO6yhrOySgdpN.y6Y8jsKsq9UkMZ9uZtYhISn2eYV.jQa', 'admin');

-- Produse exemplu
INSERT INTO `products` (`name`, `description`, `price`, `badge`, `image`) VALUES
('Product Name 1', 'Short product description goes here.', 8.20, 'Popular', 'media/product1.jpg'),
('Product Name 2', 'Short product description goes here.', 9.10, 'Popular', 'media/product2.jpg'),
('Product Name 3', 'Short product description goes here.', 9.10, 'New', 'media/product3.jpg'),
('Product Name 4', 'Short product description goes here.', 7.50, 'Popular', 'media/product4.jpg');
