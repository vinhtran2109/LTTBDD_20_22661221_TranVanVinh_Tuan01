/**
 * File: app/cart.tsx
 * Mô tả: Trang Giỏ hàng - hiển thị và chỉnh sửa giỏ
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { InvoiceItem } from '../src/models/types';
import {
  getCartWithProducts,
  updateCartItemQty,
  removeFromCart,
  getCartTotal,
} from '../src/db/cart.repo';
import { getProductById } from '../src/db/product.repo';

export default function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<InvoiceItem[]>([]);
  const [total, setTotal] = useState(0);

  // Load giỏ hàng
  const loadCart = () => {
    try {
      const items = getCartWithProducts();
      setCartItems(items);
      
      const cartTotal = getCartTotal();
      setTotal(cartTotal);
    } catch (error) {
      console.error('Error loading cart:', error);
      Alert.alert('Lỗi', 'Không thể tải giỏ hàng');
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Xử lý tăng số lượng
  const handleIncrease = (productId: string, currentQty: number) => {
    try {
      // TODO: Kiểm tra tồn kho trước khi tăng
      const product = getProductById(productId);
      
      if (!product) {
        Alert.alert('Lỗi', 'Không tìm thấy sản phẩm');
        return;
      }

      if (currentQty >= product.stock) {
        Alert.alert('Thông báo', `Chỉ còn ${product.stock} sản phẩm trong kho`);
        return;
      }

      updateCartItemQty(productId, currentQty + 1);
      loadCart();
    } catch (error) {
      console.error('Error increasing quantity:', error);
      Alert.alert('Lỗi', 'Không thể cập nhật số lượng');
    }
  };

  // Xử lý giảm số lượng
  const handleDecrease = (productId: string, currentQty: number) => {
    try {
      if (currentQty <= 1) {
        // Nếu số lượng = 1, hỏi xác nhận xoá
        Alert.alert(
          'Xác nhận',
          'Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?',
          [
            { text: 'Huỷ', style: 'cancel' },
            {
              text: 'Xoá',
              style: 'destructive',
              onPress: () => {
                removeFromCart(productId);
                loadCart();
              },
            },
          ]
        );
      } else {
        updateCartItemQty(productId, currentQty - 1);
        loadCart();
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
      Alert.alert('Lỗi', 'Không thể cập nhật số lượng');
    }
  };

  // Xử lý xoá sản phẩm
  const handleRemove = (productId: string) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc muốn xoá sản phẩm này?',
      [
        { text: 'Huỷ', style: 'cancel' },
        {
          text: 'Xoá',
          style: 'destructive',
          onPress: () => {
            try {
              removeFromCart(productId);
              loadCart();
              Alert.alert('Thành công', 'Đã xoá sản phẩm khỏi giỏ');
            } catch (error) {
              console.error('Error removing item:', error);
              Alert.alert('Lỗi', 'Không thể xoá sản phẩm');
            }
          },
        },
      ]
    );
  };

  // Xử lý xem hoá đơn
  const handleViewInvoice = () => {
    if (cartItems.length === 0) {
      Alert.alert('Thông báo', 'Giỏ hàng của bạn đang trống');
      return;
    }
    router.push('/invoice');
  };

  // Format tiền tệ
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  // Render từng item trong giỏ
  const renderCartItem = ({ item }: { item: InvoiceItem }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{formatCurrency(item.price)}</Text>
        <Text style={styles.itemSubtotal}>
          Tạm tính: <Text style={styles.subtotalAmount}>{formatCurrency(item.subtotal)}</Text>
        </Text>
      </View>
      
      <View style={styles.itemActions}>
        {/* Điều chỉnh số lượng */}
        <View style={styles.qtyControls}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => handleDecrease(item.product_id, item.qty)}
          >
            <Text style={styles.qtyButtonText}>−</Text>
          </TouchableOpacity>
          
          <Text style={styles.qtyText}>{item.qty}</Text>
          
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => handleIncrease(item.product_id, item.qty)}
          >
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        {/* Nút xoá */}
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(item.product_id)}
        >
          <Text style={styles.removeButtonText}>🗑️ Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Danh sách giỏ hàng */}
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.product_id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>🛒 Giỏ hàng trống</Text>
            <TouchableOpacity
              style={styles.shopButton}
              onPress={() => router.back()}
            >
              <Text style={styles.shopButtonText}>Tiếp tục mua sắm</Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* Footer: Tổng tiền và nút xem hoá đơn */}
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Tạm tính:</Text>
            <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
          </View>
          
          <TouchableOpacity
            style={styles.invoiceButton}
            onPress={handleViewInvoice}
          >
            <Text style={styles.invoiceButtonText}>Xem hoá đơn →</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemInfo: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  itemSubtotal: {
    fontSize: 13,
    color: '#666',
  },
  subtotalAmount: {
    fontWeight: '700',
    color: '#2196F3',
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 5,
  },
  qtyButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2196F3',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    color: '#333',
  },
  removeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f44336',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4CAF50',
  },
  invoiceButton: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  emptyContainer: {
    padding: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
