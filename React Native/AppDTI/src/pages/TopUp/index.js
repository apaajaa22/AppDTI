import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ILTopup} from '../../assets/illustration';
import {Button, Gap, Header} from '../../components';
import {colors} from '../../utils';

const TopUp = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} title="Top Up" />
      <View style={styles.page}>
        <Gap height={80} />
        <ILTopup />
        <Gap height={28} />
      </View>
      <View style={styles.button}>
        <TextInput placeholder="Nominal Top Up" style={styles.input} />
        <Gap height={20} />
        <Button
          title="SUBMIT"
          onPress={() => navigation.navigate('TopUpSuccess')}
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
});
