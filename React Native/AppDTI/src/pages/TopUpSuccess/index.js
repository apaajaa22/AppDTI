import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILTopup} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors} from '../../utils';

const TopUp = ({navigation}) => {
  return (
    <View>
      <View style={styles.page}>
        <Gap height={80} />
        <ILTopup />
        <Gap height={44} />
        <Text style={styles.text}>Top Up Berhasil!</Text>
        <Text style={styles.text}>Rp. 60.000</Text>
        <Gap height={28} />
      </View>
      <View style={styles.button}>
        <View style={styles.wrapper}>
          <Text style={styles.textsub}>20 Agustus 2020</Text>
          <Text style={styles.textsub}>VA Mandiri</Text>
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

export default TopUp;

const styles = StyleSheet.create({
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
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardBlue,
    height: 91,
    borderRadius: 5,
  },
  text: {fontSize: 24},
  textsub: {fontSize: 18, color: colors.white},
});
