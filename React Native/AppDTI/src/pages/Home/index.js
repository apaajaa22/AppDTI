import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconQR, IconTopup, IconTransfer, ILBgWhite} from '../../assets';
import {
  Feature,
  HomeProfile,
  ListHistory,
  TransaksiTerakhir,
} from '../../components/molekul';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.background}>
        <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
          <HomeProfile />
          <Text style={styles.text}>Saldo Anda: </Text>
          <Text style={styles.uang}>Rp. 1.234.567.000</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.feature}>
          <TouchableOpacity onPress={() => navigation.navigate('TopUp')}>
            <Feature profile={IconTopup} text="Top Up" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QRpayment')}>
            <Feature profile={IconQR} text="QR Pay" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
            <Feature profile={IconTransfer} text="Transfer" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{marginTop: 38, marginBottom: 8, paddingHorizontal: 20}}>
        Transaksi Terakhir Anda
      </Text>
      <View style={{paddingHorizontal: 20}}>
        <ListHistory />
        <ListHistory />
        <ListHistory />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {height: 134, backgroundColor: colors.white},
  wrapper: {
    backgroundColor: colors.cardBlue,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  feature: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    paddingVertical: 13,
  },
  text: {fontFamily: fonts.primary[600], fontSize: 14, paddingTop: 5},
  uang: {fontSize: 36, fontFamily: fonts.primary[600]},
});
