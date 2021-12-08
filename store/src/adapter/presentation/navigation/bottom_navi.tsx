import React from 'react';
import HomeView from '../views/home_view';
import {TabParams} from './navi_types';
import PbProductView from '../views/pb_view';
import BarcodeView from '../views/barcode_view';
import MapView from '../views/map_view';
import FavoriteView from '../views/favorite_view';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator<TabParams>();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeView}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
      }}
      initialParams={{bgColor: 'pink'}}
    />
    <Tab.Screen
      name="PbProduct"
      component={PbProductView}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="newspaper" size={26} />,
      }}
    />
    <Tab.Screen
      name="Barcode"
      component={BarcodeView}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="barcode" size={26} />,
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapView}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="google-maps" size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteView}
      options={{
        tabBarIcon: () => <MaterialCommunityIcons name="star-box" size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
