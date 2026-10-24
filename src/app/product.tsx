import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { API_URL, ColorOption, LOCAL_IMAGES } from '../constants/colors';

export default function ProductScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ color?: string; picked?: string }>();

  const [products, setProducts] = useState<ColorOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Lỗi fetch API:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#CA153E" />
        <Text style={{ marginTop: 10 }}>Đang tải dữ liệu từ API...</Text>
      </SafeAreaView>
    );
  }

  const currentColorKey = params.color || 'blue';
  const isPicked = params.picked === 'true';

  // Lấy sản phẩm đang chọn dựa trên màu
  const currentProduct =
    products.find((item) => item.color === currentColorKey) ||
    products.find((item) => item.color === 'blue') ||
    products[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={LOCAL_IMAGES[currentProduct?.image] || LOCAL_IMAGES['iphone_blue.png']}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome key={i} name="star" size={20} color="#E0A41D" style={{ marginRight: 4 }} />
            ))}
          </View>
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{currentProduct?.price || '1.790.000 đ'}</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.guaranteeRow}>
          <Text style={styles.guaranteeText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Text style={styles.questionMark}>?</Text>
        </View>

        <TouchableOpacity
          style={styles.selectColorBtn}
          onPress={() =>
            router.push({
              pathname: '/choose-color',
              params: { color: currentColorKey, picked: params.picked },
            })
          }
        >
          <Text style={styles.selectColorBtnText}>
            {isPicked ? '4 MÀU-CHỌN LOẠI' : '4 MÀU-CHỌN MÀU'}
          </Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 320,
    marginTop: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 15,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 25,
  },
  oldPrice: {
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  guaranteeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  guaranteeText: {
    color: '#FA0000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  questionMark: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 14,
    marginLeft: 8,
  },
  selectColorBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  selectColorBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  buyBtn: {
    backgroundColor: '#CA153E',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});