import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS_DATA } from './(tabs)/index';
import { useFavorites } from '../context/FavoritesContext';

const LOCAL_IMAGES: Record<string, any> = {
  'iphone_blue.png': require('../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../assets/images/iphone_red.png'),
  'iphone_black.png': require('../../assets/images/iphone_black.png'),
  'iphone_silver.png': require('../../assets/images/iphone_silver.png'),
};

export default function ProductDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const productId = id || '1';
  const product = PRODUCTS_DATA.find((item) => item.id === productId) || PRODUCTS_DATA[0];
  const liked = isFavorite(product.id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Nút Yêu thích trái tim ở góc trên bên phải */}
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={() => toggleFavorite(product.id)}
        >
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={30}
            color={liked ? '#CA153E' : '#888'}
          />
        </TouchableOpacity>

        <Image
          source={LOCAL_IMAGES[product.image] || LOCAL_IMAGES['iphone_blue.png']}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Mô tả sản phẩm:</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.paramNote}>
          Trạng thái: {liked ? '♥ Đã lưu vào Favorites' : '♡ Chưa lưu vào Favorites'}
        </Text>

        <TouchableOpacity style={styles.buyBtn} onPress={() => router.back()}>
          <Text style={styles.buyBtnText}>QUAY LẠI</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 15 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    position: 'relative',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    padding: 5,
  },
  image: { width: 180, height: 180, marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, paddingHorizontal: 20 },
  price: { fontSize: 20, color: '#CA153E', fontWeight: 'bold', marginBottom: 15 },
  divider: { height: 1, backgroundColor: '#E0E0E0', width: '100%', marginVertical: 10 },
  sectionTitle: { alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  description: { alignSelf: 'flex-start', fontSize: 14, color: '#555', lineHeight: 20, marginBottom: 15 },
  paramNote: { alignSelf: 'flex-start', fontSize: 13, color: '#CA153E', fontWeight: 'bold', marginBottom: 20 },
  buyBtn: { backgroundColor: '#CA153E', width: '100%', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buyBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});