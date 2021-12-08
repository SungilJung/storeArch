import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MapViewProps} from '../navigation/navi_types';

const MapView = ({}: MapViewProps) => {
  return (
    <View style={[styles.Container]}>
      <Text style={styles.Text}>map!</Text>
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

export default MapView;
