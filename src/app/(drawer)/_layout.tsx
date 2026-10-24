import React, { useEffect, useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native';

export default function DrawerLayout() {
  const [isMounted, setIsMounted] = useState(false);

  // Đảm bảo Drawer chỉ render sau khi Client đã tải xong để tránh lỗi Hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#CA153E" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: '#CA153E',
          drawerInactiveTintColor: '#333',
        }}
      >
        {/* Screen 1: Home */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Trang chủ',
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Screen 2: Profile */}
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Hồ sơ cá nhân',
            title: 'Profile',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Screen 3: Settings */}
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Cài đặt',
            title: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}