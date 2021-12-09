import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabBarAdvancedButton} from '../components/Atoms/bottom_navi_fab';
import EmptyView from '../views/empty_view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

type Props = {
  barColor: string;
};

const TabBar = ({barColor}: Props) => (
  <NavigationContainer>
    <Tab.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          {DeviceInfo.hasNotch() && (
            <View
              style={[
                styles.xFillLine,
                {
                  backgroundColor: barColor,
                  height: getBottomSpace(),
                },
              ]}
            />
          )}
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        tabBarStyle: styles.navigator,
        tabBarItemStyle: {backgroundColor: barColor},
      }}>
      <Tab.Screen
        name="Home"
        component={EmptyView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PbProduct"
        component={EmptyView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="newspaper" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Barcode"
        component={EmptyView}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton
              bgColor={barColor}
              iconName={'barcode'}
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={EmptyView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={EmptyView}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="star-box" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});

export default TabBar;
