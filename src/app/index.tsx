import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function MainMenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DANH SÁCH BÀI TẬP</Text>

      {/* Nút vào Bài 1 & 2 */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/product')}
      >
        <Text style={styles.btnText}>Bài 1 & 2: Select Phone (API MockAPI)</Text>
      </TouchableOpacity>

      {/* Nút vào Bài 3 & 4 (Có thanh Bottom Tab ở dưới) */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/(tabs)')}
      >
        <Text style={styles.btnText}>Bài 3 & 4: Bottom Tab Navigation</Text>
      </TouchableOpacity>

      {/* Nút vào Bài 5 (Có Drawer Menu kéo từ cạnh trái) */}
      <TouchableOpacity
        style={[styles.btn, styles.drawerBtn]}
        onPress={() => router.push('/(drawer)')}
      >
        <Text style={styles.btnText}>Bài 5: Drawer Navigation</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  btn: {
    backgroundColor: '#CA153E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  drawerBtn: {
    backgroundColor: '#1952E2',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});