import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>MoneyIn</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 20,
    color: colors.text.primary,
  },
});
