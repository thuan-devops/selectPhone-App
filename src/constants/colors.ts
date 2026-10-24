export interface ColorOption {
  id: string;
  color: string;
  name: string;
  supplier: string;
  price: string;
  hex: string;
  image: any;
}
export const API_URL = "https://6adc9701fa5e73d4ab2d8305.mockapi.io/SelectPhone";
export const LOCAL_IMAGES: Record<string, any> = {
  'iphone_black.png': require('../../assets/images/iphone_black.png'),
  'iphone_blue.png': require('../../assets/images/iphone_blue.png'),
  'iphone_red.png': require('../../assets/images/iphone_red.png'),
  'iphone_silver.png': require('../../assets/images/iphone_silver.png'),
};

// export const PRODUCTS_DATA: Record<string, ColorOption> = {
//   blue: {
//     id: 'blue',
//     name: 'xanh',
//     supplier: 'Tiki Traddding',
//     price: '1.790.000 đ',
//     hex: '#234896',
//     image: require('../../assets/images/iphone_blue.png'),
//   },
//   red: {
//     id: 'red',
//     name: 'đỏ',
//     supplier: 'Tiki Traddding',
//     price: '1.790.000 đ',
//     hex: '#F30D0D',
//     image: require('../../assets/images/iphone_red.png'),
//   },
//   black: {
//     id: 'black',
//     name: 'đen',
//     supplier: 'Tiki Traddding',
//     price: '1.790.000 đ',
//     hex: '#000000',
//     image: require('../../assets/images/iphone_black.png'),
//   },
//   silver: {
//     id: 'silver',
//     name: 'bạc',
//     supplier: 'Tiki Traddding',
//     price: '1.790.000 đ',
//     hex: '#C5F1FB',
//     image: require('../../assets/images/iphone_silver.png'),
// //   },
// };
