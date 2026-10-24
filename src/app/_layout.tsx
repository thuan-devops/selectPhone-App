import { Stack } from 'expo-router';
import { FavoritesProvider } from '../context/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Trang Menu chính */}
        <Stack.Screen name="index" />

        {/* Bài 3 & 4: Bottom Tabs */}
        <Stack.Screen name="(tabs)" />

        {/* Bài 5: Drawer */}
        <Stack.Screen name="(drawer)" />

        {/* Bài 1 & 2: Select Phone */}
        <Stack.Screen name="product" />
        <Stack.Screen name="choose-color" />

        {/* Màn hình Chi tiết sản phẩm */}
        <Stack.Screen
          name="product-details"
          options={{
            headerShown: true,
            title: 'Chi tiết sản phẩm',
            headerTintColor: '#CA153E',
          }}
        />
      </Stack>
    </FavoritesProvider>
  );
}