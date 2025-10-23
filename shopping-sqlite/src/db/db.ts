/**
 * File: src/db/db.ts
 * Mô tả: Khởi tạo và quản lý kết nối SQLite database
 */

import * as SQLite from 'expo-sqlite';

// Tên database
const DB_NAME = 'shopping.db';

/**
 * Mở kết nối đến database
 * @returns SQLiteDatabase instance
 */
export function openDatabase() {
  const db = SQLite.openDatabaseSync(DB_NAME);
  return db;
}

/**
 * Khởi tạo các bảng trong database
 * Gọi hàm này khi app khởi động lần đầu
 */
export async function initDatabase() {
  const db = openDatabase();

  // TODO: Tạo bảng products
  // Gợi ý: product_id TEXT PRIMARY KEY, name TEXT NOT NULL, 
  //        price REAL NOT NULL CHECK(price>=0), 
  //        stock INTEGER NOT NULL CHECK(stock>=0)
  db.execSync(`
    CREATE TABLE IF NOT EXISTS products (
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price >= 0),
      stock INTEGER NOT NULL CHECK(stock >= 0)
    );
  `);

  // TODO: Tạo bảng cart_items
  // Gợi ý: id INTEGER PRIMARY KEY AUTOINCREMENT, 
  //        product_id TEXT NOT NULL, qty INTEGER NOT NULL CHECK(qty>0),
  //        UNIQUE(product_id), FOREIGN KEY(product_id) REFERENCES products(product_id)
  db.execSync(`
    CREATE TABLE IF NOT EXISTS cart_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty > 0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

  console.log('✅ Database initialized successfully');
}

/**
 * Seed dữ liệu mẫu cho bảng products
 * Gọi hàm này sau khi init database
 */
export async function seedProducts() {
  const db = openDatabase();

  // Kiểm tra xem đã có dữ liệu chưa
  const result = db.getFirstSync<{ count: number }>('SELECT COUNT(*) as count FROM products');
  
  if (result && result.count > 0) {
    console.log('📦 Products already seeded, count:', result.count);
    return;
  }
  
  console.log('🌱 Seeding products data...');

  // TODO: Thêm các sản phẩm mẫu vào database
  // Gợi ý: INSERT INTO products VALUES (?, ?, ?, ?)
  const products = [
    { product_id: 'P001', name: 'iPhone 15 Pro Max', price: 29990000, stock: 10 },
    { product_id: 'P002', name: 'Samsung Galaxy S24', price: 22990000, stock: 15 },
    { product_id: 'P003', name: 'MacBook Pro M3', price: 52990000, stock: 5 },
    { product_id: 'P004', name: 'iPad Air', price: 15990000, stock: 20 },
    { product_id: 'P005', name: 'AirPods Pro', price: 6490000, stock: 30 },
    { product_id: 'P006', name: 'Apple Watch Series 9', price: 10990000, stock: 12 },
  ];

  for (const product of products) {
    db.runSync(
      'INSERT INTO products (product_id, name, price, stock) VALUES (?, ?, ?, ?)',
      [product.product_id, product.name, product.price, product.stock]
    );
  }

  console.log('✅ Products seeded successfully');
}

/**
 * Helper: Xoá toàn bộ dữ liệu trong database (để test)
 */
export async function clearDatabase() {
  const db = openDatabase();
  db.execSync('DELETE FROM cart_items');
  db.execSync('DELETE FROM products');
  console.log('🗑️  Database cleared');
}
