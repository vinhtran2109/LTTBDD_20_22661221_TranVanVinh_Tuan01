/**
 * File: src/db/cart.repo.ts
 * Mô tả: Các hàm truy vấn cho bảng cart_items
 */

import { CartItem, InvoiceItem } from '../models/types';
import { openDatabase } from './db';

/**
 * Lấy tất cả các mặt hàng trong giỏ
 * @returns Mảng các CartItem
 */
export function getAllCartItems(): CartItem[] {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn SELECT * FROM cart_items
  const result = db.getAllSync<CartItem>('SELECT * FROM cart_items');
  
  return result;
}

/**
 * Thêm sản phẩm vào giỏ hàng
 * Nếu sản phẩm đã có trong giỏ, tăng số lượng lên 1
 * @param productId - Mã sản phẩm
 * @param qty - Số lượng (mặc định = 1)
 * @returns true nếu thành công, false nếu thất bại
 */
export function addToCart(productId: string, qty: number = 1): boolean {
  const db = openDatabase();
  
  try {
    // TODO: Kiểm tra xem sản phẩm đã có trong giỏ chưa
    const existing = db.getFirstSync<CartItem>(
      'SELECT * FROM cart_items WHERE product_id = ?',
      [productId]
    );

    if (existing) {
      // Nếu đã có, tăng số lượng
      // TODO: UPDATE cart_items SET qty = qty + ? WHERE product_id = ?
      db.runSync(
        'UPDATE cart_items SET qty = qty + ? WHERE product_id = ?',
        [qty, productId]
      );
    } else {
      // Nếu chưa có, thêm mới
      // TODO: INSERT INTO cart_items (product_id, qty) VALUES (?, ?)
      db.runSync(
        'INSERT INTO cart_items (product_id, qty) VALUES (?, ?)',
        [productId, qty]
      );
    }
    
    return true;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return false;
  }
}

/**
 * Cập nhật số lượng của một mặt hàng trong giỏ
 * @param productId - Mã sản phẩm
 * @param newQty - Số lượng mới
 */
export function updateCartItemQty(productId: string, newQty: number): void {
  const db = openDatabase();
  
  if (newQty <= 0) {
    // Nếu số lượng <= 0, xoá khỏi giỏ
    // TODO: DELETE FROM cart_items WHERE product_id = ?
    db.runSync('DELETE FROM cart_items WHERE product_id = ?', [productId]);
  } else {
    // Cập nhật số lượng
    // TODO: UPDATE cart_items SET qty = ? WHERE product_id = ?
    db.runSync(
      'UPDATE cart_items SET qty = ? WHERE product_id = ?',
      [newQty, productId]
    );
  }
}

/**
 * Xoá một mặt hàng khỏi giỏ
 * @param productId - Mã sản phẩm
 */
export function removeFromCart(productId: string): void {
  const db = openDatabase();
  
  // TODO: DELETE FROM cart_items WHERE product_id = ?
  db.runSync('DELETE FROM cart_items WHERE product_id = ?', [productId]);
}

/**
 * Xoá toàn bộ giỏ hàng
 */
export function clearCart(): void {
  const db = openDatabase();
  
  // TODO: DELETE FROM cart_items
  db.runSync('DELETE FROM cart_items');
}

/**
 * Lấy danh sách các mặt hàng trong giỏ kèm thông tin sản phẩm (JOIN)
 * @returns Mảng InvoiceItem
 */
export function getCartWithProducts(): InvoiceItem[] {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn JOIN giữa cart_items và products
  // SELECT p.product_id, p.name, p.price, c.qty, (p.price * c.qty) as subtotal
  // FROM cart_items c
  // INNER JOIN products p ON c.product_id = p.product_id
  const result = db.getAllSync<InvoiceItem>(`
    SELECT 
      p.product_id,
      p.name,
      p.price,
      c.qty,
      (p.price * c.qty) as subtotal
    FROM cart_items c
    INNER JOIN products p ON c.product_id = p.product_id
  `);
  
  return result;
}

/**
 * Tính tổng tiền trong giỏ hàng
 * @returns Tổng tiền
 */
export function getCartTotal(): number {
  const db = openDatabase();
  
  // TODO: Viết câu truy vấn tính tổng
  // SELECT SUM(p.price * c.qty) as total
  // FROM cart_items c
  // INNER JOIN products p ON c.product_id = p.product_id
  const result = db.getFirstSync<{ total: number | null }>(`
    SELECT SUM(p.price * c.qty) as total
    FROM cart_items c
    INNER JOIN products p ON c.product_id = p.product_id
  `);
  
  return result?.total || 0;
}
