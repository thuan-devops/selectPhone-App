import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS_DATA } from './index';

const LOCAL_IMAGES: Record<string, any> = {
  'iphone_blue.png': require('../../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../../assets/images/iphone_red.png'),
  'iphone_black.png': require('../../../assets/images/iphone_black.png'),
  'iphone_silver.png': require('../../../assets/images/iphone_silver.png'),
};

export default function SearchScreen() {
  const [keyword, setKeyword] = useState('');

  const filteredProducts = PRODUCTS_DATA.filter((item) =>
    item.title.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#808080" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Nhập tên sản phẩm..."
          value={keyword}
          onChangeText={setKeyword}
        />
        {keyword !== '' && (
          <TouchableOpacity onPress={() => setKeyword('')}>
            <Ionicons name="close-circle" size={20} color="#808080" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 15, paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {keyword ? `Không tìm thấy sản phẩm nào khớp với "${keyword}"` : 'Nhập từ khóa để bắt đầu tìm kiếm'}
            </Text>
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
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 15, paddingTop: 10 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, elevation: 2 },
  input: { flex: 1, fontSize: 16 },
  emptyContainer: { marginTop: 40, alignItems: 'center' },
  emptyText: { fontSize: 15, color: '#666', textAlign: 'center' },
  itemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10, elevation: 2 },
  itemImage: { width: 60, height: 60, marginRight: 15 },
  itemInfo: { flex: 1, justifyContent: 'center' },
  itemTitle: { fontSize: 15, fontWeight: '600' },
  itemPrice: { fontSize: 14, color: '#CA153E', fontWeight: 'bold', marginTop: 4 },
});