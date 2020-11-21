import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILTransfer} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors} from '../../utils';

const Transfer = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Header title="Transfer" />
      <View style={styles.page}>
        <Gap height={80} />
        <ILTransfer />
        <Gap height={28} />
      </View>
      <View style={styles.button}>
        <TextInput placeholder="Nominal Transfer" style={styles.input} />
        <Gap height={17} />
        <TextInput
          placeholder="Nomor Handphone Penerima"
          style={styles.input}
        />
        <Gap height={20} />
        <Button
          title="PERIKSA NOMOR"
          onPress={() => navigation.navigate('TransferCheck')}
        />
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  content: {backgroundColor: colors.white, flex: 1},
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.4,
    paddingLeft: 10,
    borderRadius: 4,
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
  button: {paddingHorizontal: 40},
});
