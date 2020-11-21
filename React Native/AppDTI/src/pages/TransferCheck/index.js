import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILTransfer} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const TransferCheck = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Header onPress={() => navigation.goBack()} title="Transfer" />
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
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text style={styles.text}>Penerima :</Text>
          <Gap height={10} />
          <Text style={styles.name}>Rahadian Reza</Text>
        </View>
        <Gap height={20} />
        <Button
          title="TRANSFER"
          onPress={() => navigation.navigate('TransferSuccess')}
        />
      </View>
    </View>
  );
};

export default TransferCheck;

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
  text: {fontFamily: fonts.primary[400], fontSize: 16},
  name: {fontFamily: fonts.primary[300], fontSize: 16},
});
