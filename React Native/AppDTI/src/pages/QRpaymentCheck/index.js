import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILBayar, ILTransfer} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const QRpaymentCheck = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} title="Konfirmasi Bayar" />
      <View style={styles.page}>
        <Gap height={20} />
        <ILBayar />
        <Gap height={20} />
        <View style={{flex: 1}}>
          <Text style={styles.text}> Rp. 100.000</Text>
        </View>
        <Gap height={40} />
      </View>
      <View style={styles.button}>
        <View style={styles.wrapper}>
          <Text style={styles.textsubfor}>Pembayaran Kepada :</Text>
          <Text style={styles.textsubname}>DTI Telkom University</Text>
          <Text style={styles.textsubaddress}>
            Jl. Telekomunikasi, Kota Bandung
          </Text>
        </View>
        <Gap height={20} />
        <Button
          title="SUBMIT"
          onPress={() => navigation.navigate('QRpaymentSuccess')}
        />
      </View>
    </View>
  );
};

export default QRpaymentCheck;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingBottom: 90,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cardBlue,
    height: 155,
    borderRadius: 5,
    paddingVertical: 14,
  },
  text: {
    fontSize: 24,
    textDecorationLine: 'underline',
  },
  textsubfor: {
    fontFamily: fonts.primary[300],
    fontSize: 18,
    color: colors.white,
  },
  textsubname: {
    fontFamily: fonts.primary[400],
    fontSize: 24,
    color: colors.white,
  },
  textsubaddress: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.white,
  },
});
