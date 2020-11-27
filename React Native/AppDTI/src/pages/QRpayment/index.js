import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILBayar, ILTransfer} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const QRpayment = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} title="QR Payment" />
      <View>
        <View style={styles.button}>
          <Gap height={20} />
          <Button
            title="SCAN"
            onPress={() => navigation.navigate('QRpaymentCheck')}
          />
        </View>
      </View>
    </View>
  );
};

export default QRpayment;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingBottom: 90,
  },
});
