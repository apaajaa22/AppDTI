import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
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
import {JSONItemPrice} from '../../assets';

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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={{paddingHorizontal: 20}}>
          {JSONItemPrice.data.map((item) => {
            return (
              <ListHistory
                key={item.id}
                prc={item.prc}
                telp={item.telp}
                date={item.date}
              />
            );
          })}
        </View>
      </ScrollView>
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
  scroll: {marginTop: 15},
});
