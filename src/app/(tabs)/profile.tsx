import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Đỗ Minh Thuận</Text>
        <Text style={styles.email}>MSSV: 23673191</Text>
        <Text style={styles.role}>Lập trình Mobile (React Native)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', justifyContent: 'center', alignItems: 'center' },
  profileCard: { backgroundColor: '#fff', padding: 30, borderRadius: 20, alignItems: 'center', width: '85%', elevation: 3 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#CA153E', marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  email: { fontSize: 14, color: '#666', marginBottom: 5 },
  role: { fontSize: 14, color: '#CA153E', fontWeight: '500', marginTop: 10 },
});