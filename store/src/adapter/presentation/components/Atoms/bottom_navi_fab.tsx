import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TabBg} from './tab_bg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
  buttonColor?: string;
  iconName: string;
  iconColor?: string;
};

export const TabBarAdvancedButton = ({
  bgColor,
  iconName,
  buttonColor = 'orange',
  iconColor = 'black',
  ...props
}: Props) => (
  <View style={styles.container} pointerEvents="box-none">
    <TabBg color={bgColor} style={styles.background} />
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}]}
      onPress={props.onPress}>
      <MaterialCommunityIcons
        name={iconName}
        style={[styles.buttonIcon, {color: iconColor}]}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
  },
  buttonIcon: {
    fontSize: 24,
  },
});
