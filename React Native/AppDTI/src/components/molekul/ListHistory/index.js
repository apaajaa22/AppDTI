import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconTransfer2} from '../../../assets';
import {colors} from '../../../utils';

const ListHistory = ({prc, telp, date}) => {
  return (
    <View style={styles.page}>
      <IconTransfer2 />
      <View style={styles.text}>
        <Text>Rp.{prc}</Text>
        <Text>Transfer ke {telp}</Text>
      </View>
      <View>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: colors.white,
    height: 72,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {marginLeft: -50},
});
