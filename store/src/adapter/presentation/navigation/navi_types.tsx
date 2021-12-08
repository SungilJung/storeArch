import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

export type TabParams = {
  Home: {bgColor: string};
  PbProduct: undefined;
  Barcode: undefined;
  Map: undefined;
  Favorite: undefined;
};

export type HomeViewProps = MaterialBottomTabScreenProps<TabParams, 'Home'>;
export type PbProductViewProps = MaterialBottomTabScreenProps<
  TabParams,
  'PbProduct'
>;
export type BarcodeViewProps = MaterialBottomTabScreenProps<
  TabParams,
  'Barcode'
>;
export type MapViewProps = MaterialBottomTabScreenProps<TabParams, 'Map'>;
export type FavoriteViewProps = MaterialBottomTabScreenProps<
  TabParams,
  'Favorite'
>;
