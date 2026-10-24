import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const LOCAL_IMAGES: Record<string, any> = {
  'iphone_blue.png': require('../../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../../assets/images/iphone_red.png'),
  'iphone_black.png': require('../../../assets/images/iphone_black.png'),
  'iphone_silver.png': require('../../../assets/images/iphone_silver.png'),
};

export const PRODUCTS_DATA = [
  { id: '1', title: 'Điện thoại Vsmart Joy 3 - Xanh', price: '1.790.000 đ', image: 'iphone_blue.png', description: 'Màn hình 6.5 inch, RAM 3GB, Bộ nhớ 32GB, Pin 5000 mAh.' },
  { id: '2', title: 'Điện thoại Vsmart Joy 3 - Đỏ', price: '1.790.000 đ', image: 'iphone_red.png', description: 'Màn hình 6.5 inch, RAM 3GB, Bộ nhớ 32GB, Camera ba camera AI.' },
  { id: '3', title: 'Điện thoại Vsmart Joy 3 - Đen', price: '1.790.000 đ', image: 'iphone_black.png', description: 'Màn hình 6.5 inch, Thiết kế sang trọng, Sạc nhanh Quick Charge 3.0.' },
  { id: '4', title: 'Điện thoại Vsmart Joy 3 - Bạc', price: '1.790.000 đ', image: 'iphone_silver.png', description: 'Màn hình 6.5 inch, Cảm biến vân tay mặt lưng, Hàng chính hãng.' },
];

export default function ProductsTab() {
  const router = useRouter();

  // Hàm chuyển trang kèm tham số id
  const handleSelectItem = (id: string) => {
    router.push({
      pathname: '/product-details',
      params: { id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PRODUCTS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() => handleSelectItem(item.id)}
            activeOpacity={0.7}
          >
            <Image
              source={LOCAL_IMAGES[item.image] || LOCAL_IMAGES['iphone_blue.png']}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.clickHint}>Chạm để xem chi tiết &gt;</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 15 },
  itemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 12, elevation: 2 },
  itemImage: { width: 70, height: 70, marginRight: 15 },
  itemInfo: { flex: 1, justifyContent: 'center' },
  itemTitle: { fontSize: 15, fontWeight: '600', color: '#000' },
  itemPrice: { fontSize: 14, color: '#CA153E', fontWeight: 'bold', marginTop: 4 },
  clickHint: { fontSize: 12, color: '#888', marginTop: 4 },
});