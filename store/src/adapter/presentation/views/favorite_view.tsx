import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FavoriteViewProps} from '../navigation/navi_types';

const FavoriteView = ({}: FavoriteViewProps) => {
  return (
    <View style={[styles.Container]}>
      <Text style={styles.Text}>favorite!</Text>
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

export default FavoriteView;
