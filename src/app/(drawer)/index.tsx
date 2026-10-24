import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../../context/FavoritesContext';

// Bộ ánh xạ ảnh local
const LOCAL_IMAGES: Record<string, any> = {
  'iphone_blue.png': require('../../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../../assets/images/iphone_red.png'),
  'iphone_black.png': require('../../../assets/images/iphone_black.png'),
  'iphone_silver.png': require('../../../assets/images/iphone_silver.png'),
};

// Dữ liệu danh sách sản phẩm
const DRAWER_PRODUCTS = [
  { id: '1', title: 'Điện thoại Vsmart Joy 3 - Xanh', price: '1.790.000 đ', image: 'iphone_blue.png' },
  { id: '2', title: 'Điện thoại Vsmart Joy 3 - Đỏ', price: '1.790.000 đ', image: 'iphone_red.png' },
  { id: '3', title: 'Điện thoại Vsmart Joy 3 - Đen', price: '1.790.000 đ', image: 'iphone_black.png' },
  { id: '4', title: 'Điện thoại Vsmart Joy 3 - Bạc', price: '1.790.000 đ', image: 'iphone_silver.png' },
];

export default function DrawerHomeScreen() {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSelectItem = (id: string) => {
    // Chuyển sang màn hình Chi tiết sản phẩm
    router.push({
      pathname: '/product-details',
      params: { id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Danh sách sản phẩm (Drawer)</Text>

      <FlatList
        data={DRAWER_PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => {
          const liked = isFavorite(item.id);

          return (
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

              {/* Nút tim nhanh trên danh sách */}
              <TouchableOpacity
                style={styles.heartBtn}
                onPress={() => toggleFavorite(item.id)}
              >
                <Ionicons
                  name={liked ? 'heart' : 'heart-outline'}
                  size={24}
                  color={liked ? '#CA153E' : '#888'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 65,
    height: 65,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  itemPrice: {
    fontSize: 14,
    color: '#CA153E',
    fontWeight: 'bold',
    marginTop: 4,
  },
  clickHint: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  heartBtn: {
    padding: 8,
  },
});