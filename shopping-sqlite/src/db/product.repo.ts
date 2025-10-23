/**
 * File: src/db/product.repo.ts
 * Mô tả: Các hàm truy vấn cho bảng products
 */

import { Product } from '../models/types';
import { openDatabase } from './db';

/**
 * Lấy tất cả sản phẩm từ database
 * @returns Mảng các sản phẩm
 */
export function getAllProducts(): Product[] {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn SELECT * FROM products
  const result = db.getAllSync<Product>('SELECT * FROM products');
  
  return result;
}

/**
 * Lấy thông tin một sản phẩm theo ID
 * @param productId - Mã sản phẩm
 * @returns Sản phẩm hoặc null nếu không tìm thấy
 */
export function getProductById(productId: string): Product | null {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn SELECT * FROM products WHERE product_id = ?
  const result = db.getFirstSync<Product>(
    'SELECT * FROM products WHERE product_id = ?',
    [productId]
  );
  
  return result || null;
}

/**
 * Cập nhật số lượng tồn kho của sản phẩm
 * @param productId - Mã sản phẩm
 * @param newStock - Số lượng tồn kho mới
 */
export function updateProductStock(productId: string, newStock: number): void {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn UPDATE products SET stock = ? WHERE product_id = ?
  db.runSync(
    'UPDATE products SET stock = ? WHERE product_id = ?',
    [newStock, productId]
  );
}

/**
 * Thêm sản phẩm mới vào database
 * @param product - Thông tin sản phẩm
 */
export function addProduct(product: Product): void {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn INSERT INTO products
  db.runSync(
    'INSERT INTO products (product_id, name, price, stock) VALUES (?, ?, ?, ?)',
    [product.product_id, product.name, product.price, product.stock]
  );
}

/**
 * Xoá sản phẩm khỏi database
 * @param productId - Mã sản phẩm
 */
export function deleteProduct(productId: string): void {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn DELETE FROM products WHERE product_id = ?
  db.runSync('DELETE FROM products WHERE product_id = ?', [productId]);
}
