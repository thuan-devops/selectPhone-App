import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { API_URL, ColorOption, LOCAL_IMAGES } from '../constants/colors';

export default function ChooseColorScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ color?: string; picked?: string }>();

  const [products, setProducts] = useState<ColorOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedKey, setSelectedKey] = useState<string>(params.color || 'blue');
  const [hasPicked, setHasPicked] = useState<boolean>(params.picked === 'true');

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
        <ActivityIndicator size="large" color="#1952E2" />
        <Text style={{ marginTop: 10 }}>Đang tải dữ liệu màu...</Text>
      </SafeAreaView>
    );
  }

  const activeProduct =
    products.find((item) => item.color === selectedKey) ||
    products.find((item) => item.color === 'blue') ||
    products[0];

  const handleSelectColor = (colorKey: string) => {
    setSelectedKey(colorKey);
    setHasPicked(true);
  };

  const handleDone = () => {
    router.replace({
      pathname: '/',
      params: {
        color: selectedKey,
        picked: hasPicked ? 'true' : 'false',
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={LOCAL_IMAGES[activeProduct?.image] || LOCAL_IMAGES['iphone_blue.png']}
          style={styles.smallImage}
          resizeMode="contain"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productTitle}>Hàng chính hãng</Text>

          {hasPicked && (
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>
                Màu: <Text style={styles.boldText}>{activeProduct?.name}</Text>
              </Text>
              <Text style={styles.detailText}>
                Cung cấp bởi <Text style={styles.boldText}>{activeProduct?.supplier}</Text>
              </Text>
              <Text style={styles.priceText}>{activeProduct?.price}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.colorSelectorSection}>
        <Text style={styles.sectionTitle}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorList}>
          {products.map((item) => (
            <TouchableOpacity
              key={item.id || item.color}
              style={[
                styles.colorBox,
                { backgroundColor: item.hex },
                selectedKey === item.color && styles.selectedBorder,
              ]}
              onPress={() => handleSelectColor(item.color)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.doneBtn} onPress={handleDone}>
          <Text style={styles.doneBtnText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { justifyContent: 'center', alignItems: 'center' },
  header: { flexDirection: 'row', padding: 15, backgroundColor: '#fff' },
  smallImage: { width: 104, height: 127 },
  headerTextContainer: { marginLeft: 15, flex: 1 },
  productTitle: { fontSize: 15, color: '#000' },
  detailsContainer: { marginTop: 6 },
  detailText: { fontSize: 14, marginBottom: 2 },
  boldText: { fontWeight: 'bold' },
  priceText: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  colorSelectorSection: { flex: 1, backgroundColor: '#C4C4C4', padding: 15, justifyContent: 'space-between' },
  sectionTitle: { fontSize: 18, color: '#000' },
  colorList: { alignItems: 'center', gap: 12 },
  colorBox: { width: 80, height: 80, elevation: 3 },
  selectedBorder: { borderWidth: 3, borderColor: '#000' },
  doneBtn: { backgroundColor: 'rgba(25, 82, 226, 0.58)', paddingVertical: 12, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#CA153E' },
  doneBtnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});