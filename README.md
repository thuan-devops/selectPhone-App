# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Cấu trúc thư mục dự án (Project Directory Structure)

```text
Select-Phone/
├── assets/                  # Thư mục chứa tài nguyên tĩnh (hình ảnh, icons, phông chữ)
│   ├── expo.icon/           # Cấu hình icon dự án
│   └── images/              # Chứa các file ảnh sản phẩm (.png)
├── src/                     # Thư mục chứa toàn bộ mã nguồn chính của ứng dụng
│   ├── app/                 # Thư mục định tuyến file-based (Expo Router)
│   │   ├── (drawer)/        # [Bài 5] Nhóm màn hình Drawer Navigation (kéo từ bên trái)
│   │   │   ├── _layout.tsx  # Cấu hình danh sách menu Drawer (Home, Profile, Settings)
│   │   │   ├── index.tsx    # Màn hình Trang chủ trong Drawer (Danh sách sản phẩm)
│   │   │   ├── profile.tsx  # Màn hình Hồ sơ người dùng
│   │   │   └── settings.tsx # Màn hình Cài đặt (Các nút Switch bật/tắt)
│   │   ├── (tabs)/          # [Bài 3 & 4] Nhóm màn hình Bottom Tab Navigation (thanh dưới đáy)
│   │   │   ├── _layout.tsx  # Cấu hình 4 tab (Products, Favorites, Search, Profile)
│   │   │   ├── favorites.tsx# Tab hiển thị các sản phẩm đã bấm tim yêu thích
│   │   │   ├── index.tsx    # Tab danh sách sản phẩm (Products)
│   │   │   ├── profile.tsx  # Tab thông tin cá nhân
│   │   │   └── search.tsx   # Tab tìm kiếm sản phẩm theo từ khóa
│   │   ├── _layout.tsx      # File cấu hình Root Stack tổng (bao bọc toàn bộ ứng dụng)
│   │   ├── choose-color.tsx # [Bài 1 & 2] Màn hình chọn màu sắc sản phẩm
│   │   ├── index.tsx        # Màn hình Menu chính (Trang chọn Bài tập 1–5)
│   │   ├── product.tsx      # [Bài 1 & 2] Màn hình xem chi tiết Vsmart Joy 3 (kết nối MockAPI)
│   │   └── product-details.tsx # [Bài 4 & 5] Màn hình Chi tiết sản phẩm (nhận tham số id)
│   ├── components/          # Chứa các UI Components tái sử dụng
│   ├── constants/           # Chứa các hằng số dùng chung (Màu sắc, API_URL,...)
│   └── context/             # Quản lý Trạng thái dùng chung (State Management)
│       └── FavoritesContext.tsx # Context lưu trữ danh sách sản phẩm Yêu thích (♡ / ♥)
├── scripts/                 # Chứa các script bổ trợ dự án
├── package.json             # Khai báo các thư viện phụ thuộc và lệnh thực thi (scripts)
└── tsconfig.json            # Cấu hình TypeScript cho dự án
1. Thư mục src/app/ (Expo Router - File-based Routing)
index.tsx (Root Menu): Màn hình đầu tiên xuất hiện khi mở app, đóng vai trò như một Menu tổng giúp chọn nhanh giữa các bài tập (Bài 1&2, Bài 3&4, Bài 5).

_layout.tsx (Root Layout): File định tuyến cấp cao nhất. Nơi bọc FavoritesProvider để chia sẻ dữ liệu yêu thích cho toàn bộ màn hình, đồng thời cấu hình Stack chính.

product.tsx & choose-color.tsx (Bài 1 & 2): Xử lý luồng chọn điện thoại Vsmart Joy 3, kết nối API lấy danh sách màu sắc và cập nhật màu đã chọn động qua param.

product-details.tsx (Bài 4 & 5): Màn hình hiển thị chi tiết 1 sản phẩm cụ thể. Sử dụng hook useLocalSearchParams() để lấy id được truyền qua từ danh sách sản phẩm và chứa nút bấm thả tim (♥).

2. Thư mục src/app/(tabs)/ (Bottom Tab Navigation - Bài 3 & 4)
_layout.tsx: Định nghĩa thanh điều hướng ở đáy màn hình với các icon từ @expo/vector-icons (Ionicons).

index.tsx (Products Tab): Màn hình danh sách sản phẩm dạng FlatList, chạm vào item sẽ chuyển sang product-details.

favorites.tsx (Favorites Tab): Lọc và hiển thị danh sách các sản phẩm mà người dùng đã bấm icon trái tim (♥). Tự động cập nhật rỗng nếu người dùng bỏ thích.

search.tsx (Search Tab): Chứa ô TextInput nhập từ khóa để tìm kiếm và lọc sản phẩm tương ứng theo thời gian thực.

profile.tsx (Profile Tab): Màn hình hiển thị ảnh đại diện (Avatar) và thông tin sinh viên thực hiện.

3. Thư mục src/app/(drawer)/ (Drawer Navigation - Bài 5)
_layout.tsx: Cấu hình Menu trượt từ cạnh trái màn hình. Có tích hợp kiểm tra Client-side mount để khắc phục triệt để lỗi Hydration trên nền tảng Web.

index.tsx: Trang chủ của Drawer hiển thị danh sách sản phẩm kèm nút thả tim nhanh.

profile.tsx & settings.tsx: Màn hình thông tin hồ sơ và màn hình cài đặt có sử dụng linh kiện Switch để bật/tắt tính năng (Thông báo, Chế độ tối).

4. Thư mục src/context/
FavoritesContext.tsx: Sử dụng React Context API để lưu giữ mảng các id sản phẩm đã lưu vào danh sách yêu thích. Giúp đồng bộ trạng thái trái tim (♡/♥) tức thì giữa tất cả màn hình (Products, Product Details, Favorites) mà không bị mất dữ liệu khi chuyển tab.
