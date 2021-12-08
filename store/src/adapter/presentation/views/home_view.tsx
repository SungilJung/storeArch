import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HomeViewProps} from '../navigation/navi_types';

const HomeView = ({route}: HomeViewProps) => {
  const {bgColor} = route.params;

  return (
    <View style={[styles.Container, {backgroundColor: bgColor}]}>
      <Text style={styles.Text}>Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Text: {
    backgroundColor: 'green',
  },
});

export default HomeView;
