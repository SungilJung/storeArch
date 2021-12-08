import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PbProductViewProps} from '../navigation/navi_types';

const PbProductView = ({}: PbProductViewProps) => {
  return (
    <View style={[styles.Container]}>
      <Text style={styles.Text}>pb product!</Text>
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

export default PbProductView;
