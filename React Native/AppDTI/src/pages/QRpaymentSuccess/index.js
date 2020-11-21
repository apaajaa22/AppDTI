import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILBayar, ILTransfer} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors} from '../../utils';

const QRpaymentSuccess = ({navigation}) => {
  return (
    <View>
      <View style={styles.page}>
        <Gap height={80} />
        <ILBayar />
        <Gap height={44} />
        <Text style={styles.text}>Pembayaran Berhasil!</Text>
        <Gap height={10} />
        <Text style={styles.text}>Rp. 100.000</Text>
        <Gap height={28} />
      </View>
      <View style={styles.button}>
        <View style={styles.wrapper}>
          <Text style={styles.textsub}>20 Agustus 2020</Text>
          <Text style={styles.textsub}>Penerima : DTI Telkom University</Text>
          <Text style={styles.textsub}>Jl. Ciparay No 20B, Kota Bandung</Text>
        </View>
        <Gap height={20} />
        <Button
          title="SELESAI"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
};

export default QRpaymentSuccess;

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
    height: 121,
    borderRadius: 5,
    paddingVertical: 14,
  },
  text: {fontSize: 24},
  textsub: {fontSize: 18, color: colors.white},
});
