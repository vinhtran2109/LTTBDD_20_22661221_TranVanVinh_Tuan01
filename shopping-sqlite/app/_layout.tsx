/**
 * File: app/_layout.tsx
 * Mô tả: Layout chính cho expo-router, khởi tạo database
 */

import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Platform, Alert } from 'react-native';
import { initDatabase, seedProducts, clearDatabase } from '../src/db/db';

export default function RootLayout() {
  // Khởi tạo database khi app khởi động
  useEffect(() => {
    const setup = async () => {
      // SQLite chỉ hoạt động trên mobile (Android/iOS)
      if (Platform.OS === 'web') {
        console.warn('⚠️ SQLite không hỗ trợ web platform');
        console.warn('📱 Vui lòng chạy trên Android hoặc iOS');
        return;
      }

      try {
        console.log('🚀 Starting database setup...');
        
        // Uncomment dòng dưới nếu muốn reset database hoàn toàn
        // await clearDatabase();
        
        await initDatabase();
        console.log('📦 Seeding products...');
        await seedProducts();
        console.log('✅ App setup completed');
      } catch (error) {
        console.error('❌ Error during setup:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
      }
    };
    
    setup();
  }, []);

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Danh sách Sản phẩm',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="cart" 
        options={{ 
          title: 'Giỏ hàng',
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="invoice" 
        options={{ 
          title: 'Hoá đơn',
          headerStyle: { backgroundColor: '#FF9800' },
          headerTintColor: '#fff',
        }} 
      />
    </Stack>
  );
}
