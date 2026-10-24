import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PRODUCTS_DATA } from './index';
import { useFavorites } from '../../context/FavoritesContext';

const LOCAL_IMAGES: Record<string, any> = {
  'iphone_blue.png': require('../../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../../assets/images/iphone_red.png'),
  'iphone_black.png': require('../../../assets/images/iphone_black.png'),
  'iphone_silver.png': require('../../../assets/images/iphone_silver.png'),
};

export default function FavoritesTab() {
  const { favorites } = useFavorites();

  // Lọc sản phẩm nằm trong danh sách yêu thích
  const favoriteProducts = PRODUCTS_DATA.filter((item) => favorites.includes(item.id));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Sản phẩm yêu thích ({favoriteProducts.length})</Text>

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có sản phẩm nào trong danh sách yêu thích.</Text>
            <Text style={styles.subEmptyText}>Hãy bấm biểu tượng ♡ ở màn hình chi tiết để thêm vào đây!</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image
              source={LOCAL_IMAGES[item.image] || LOCAL_IMAGES['iphone_blue.png']}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 12, color: '#333' },
  emptyContainer: { marginTop: 60, alignItems: 'center', paddingHorizontal: 20 },
  emptyText: { fontSize: 16, color: '#666', fontWeight: '500', textAlign: 'center' },
  subEmptyText: { fontSize: 13, color: '#999', marginTop: 8, textAlign: 'center' },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemImage: { width: 60, height: 60, marginRight: 15 },
  itemInfo: { flex: 1 },
  itemTitle: { fontSize: 15, fontWeight: '600' },
  itemPrice: { fontSize: 14, color: '#CA153E', fontWeight: 'bold', marginTop: 4 },
});