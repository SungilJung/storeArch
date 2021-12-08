import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {BarcodeViewProps} from '../navigation/navi_types';

const BarcodeView = ({}: BarcodeViewProps) => {
  return (
    <View style={[styles.Container]}>
      <Text style={styles.Text}>barcode!</Text>
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

export default BarcodeView;
