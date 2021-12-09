import React, {useMemo} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {generateColor} from '../../../common/utils';

const EmptyView = () => {
  const colors = useMemo(
    () => [...new Array(20)].map(() => generateColor()),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 80}}
        data={colors}
        renderItem={({item: color}) => (
          <View style={[styles.item, {backgroundColor: color}]} />
        )}
        keyExtractor={(item, index) => `item_${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7EB',
  },
  item: {
    margin: 10,
    height: 90,
    borderRadius: 10,
  },
});

export default EmptyView;
