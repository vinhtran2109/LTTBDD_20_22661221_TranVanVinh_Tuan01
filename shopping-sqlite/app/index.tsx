/**
 * File: app/index.tsx
 * Mô tả: Trang hiển thị danh sách sản phẩm (Trang chủ)
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '../src/models/types';
import { getAllProducts, getProductById } from '../src/db/product.repo';
import { addToCart, getAllCartItems } from '../src/db/cart.repo';

export default function ProductsScreen() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Load danh sách sản phẩm
  const loadProducts = () => {
    try {
      console.log('📥 Loading products...');
      const data = getAllProducts();
      console.log('✅ Loaded products:', data.length);
      setProducts(data);
      
      // Cập nhật số lượng items trong giỏ
      const cartItems = getAllCartItems();
      console.log('🛒 Cart items:', cartItems.length);
      setCartCount(cartItems.length);
    } catch (error) {
      console.error('❌ Error loading products:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      Alert.alert('Lỗi', 'Không thể tải danh sách sản phẩm');
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Xử lý pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    loadProducts();
    setRefreshing(false);
  };

  // Xử lý thêm vào giỏ
  const handleAddToCart = (productId: string) => {
    try {
      // TODO: Kiểm tra tồn kho trước khi thêm
      const product = getProductById(productId);
      
      if (!product) {
        Alert.alert('Lỗi', 'Không tìm thấy sản phẩm');
        return;
      }

      if (product.stock <= 0) {
        Alert.alert('Hết hàng', 'Sản phẩm này hiện đã hết hàng');
        return;
      }

      // TODO: Kiểm tra số lượng trong giỏ, không vượt quá tồn kho
      const cartItems = getAllCartItems();
      const existingItem = cartItems.find(item => item.product_id === productId);
      
      if (existingItem && existingItem.qty >= product.stock) {
        Alert.alert('Thông báo', `Bạn đã thêm tối đa ${product.stock} sản phẩm này vào giỏ`);
        return;
      }

      // Thêm vào giỏ
      const success = addToCart(productId, 1);
      
      if (success) {
        Alert.alert('Thành công', 'Đã thêm sản phẩm vào giỏ hàng');
        loadProducts(); // Refresh để cập nhật cart count
      } else {
        Alert.alert('Lỗi', 'Không thể thêm vào giỏ hàng');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm vào giỏ');
    }
  };

  // Format tiền tệ
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  // Render từng sản phẩm
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
        <Text style={styles.productStock}>
          Còn lại: <Text style={styles.stockNumber}>{item.stock}</Text> sản phẩm
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.addButton, item.stock <= 0 && styles.addButtonDisabled]}
        onPress={() => handleAddToCart(item.product_id)}
        disabled={item.stock <= 0}
      >
        <Text style={styles.addButtonText}>
          {item.stock > 0 ? '+ Thêm' : 'Hết hàng'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header với số lượng giỏ hàng */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Sản phẩm có sẵn: {products.length}</Text>
          <TouchableOpacity onPress={() => {
            console.log('Current products:', products);
            Alert.alert('Debug', `Có ${products.length} sản phẩm`);
          }}>
            <Text style={{color: '#666', fontSize: 12}}>Tap để debug</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => router.push('/cart')}
        >
          <Text style={styles.cartButtonText}>🛒 Giỏ hàng ({cartCount})</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.product_id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Không có sản phẩm nào</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 15,
    color: '#2196F3',
    fontWeight: '700',
    marginBottom: 3,
  },
  productStock: {
    fontSize: 13,
    color: '#666',
  },
  stockNumber: {
    fontWeight: '600',
    color: '#4CAF50',
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
