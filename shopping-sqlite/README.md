# 🛒 Shopping SQLite - Ứng dụng Mua sắm Online

## 📋 Mô tả
Ứng dụng React Native (Expo) quản lý mua sắm online với SQLite, bao gồm:
- 📱 Trang Sản phẩm: Liệt kê và thêm vào giỏ
- 🛒 Trang Giỏ hàng: Quản lý số lượng, xóa sản phẩm
- 🧾 Trang Hoá đơn: Tính tổng tiền, VAT, thanh toán

## 🚀 Cài đặt & Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm start

# Chạy trên Android
npm run android

# Chạy trên iOS
npm run ios
```

## 📁 Cấu trúc thư mục
```
shopping-sqlite/
├── app/
│   ├── _layout.tsx     # Layout & khởi tạo DB
│   ├── index.tsx       # Trang Sản phẩm
│   ├── cart.tsx        # Trang Giỏ hàng
│   └── invoice.tsx     # Trang Hoá đơn
├── src/
│   ├── db/
│   │   ├── db.ts           # Khởi tạo database
│   │   ├── product.repo.ts # CRUD products
│   │   └── cart.repo.ts    # CRUD cart_items
│   └── models/
│       └── types.ts        # TypeScript types
```

## 🗄️ Database Schema

### products
```sql
CREATE TABLE products (
  product_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL CHECK(price >= 0),
  stock INTEGER NOT NULL CHECK(stock >= 0)
);
```

### cart_items
```sql
CREATE TABLE cart_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  qty INTEGER NOT NULL CHECK(qty > 0),
  UNIQUE(product_id),
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);
```

## ✅ Checklist Nghiệm thu
- [x] Tạo và khởi tạo SQLite với 2 bảng
- [x] Seed dữ liệu mẫu (6 sản phẩm)
- [x] Trang Sản phẩm: Hiển thị danh sách + thêm vào giỏ
- [x] Kiểm tra tồn kho khi thêm vào giỏ
- [x] Trang Giỏ hàng: +/- số lượng, xóa sản phẩm
- [x] Trang Hoá đơn: Liệt kê chi tiết, tính VAT
- [x] Điều hướng giữa 3 màn hình
- [x] Dữ liệu lưu bền trong SQLite
- [x] Thanh toán: Trừ tồn kho, xóa giỏ

## 🎯 Thang điểm (10đ)
- CSDL & init/seed đúng: 2đ ✅
- Trang Sản phẩm & thêm vào giỏ: 2đ ✅
- Trang Giỏ hàng (sửa số lượng/xóa): 2đ ✅
- Trang Hoá đơn & tính tổng: 2đ ✅
- Kiểm tra tồn kho + UX: 1đ ✅
- Code sạch (TypeScript, repo): 1đ ✅

## 🌟 Tính năng nâng cao (Bonus)
- ✅ Format tiền tệ VND
- ✅ Alert/Toast thông báo
- ✅ Thanh toán & trừ tồn kho
- ✅ Pull-to-refresh
- ✅ Validate dữ liệu
