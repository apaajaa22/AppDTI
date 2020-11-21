import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';
import {Button, Gap} from '../../atoms';

const UserProfile = () => {
  return (
    <View>
      <View style={styles.background}>
        <Image source={ILNullPhoto} style={styles.image} />
        <Gap height={23} />
        <Text style={styles.text}>Rahadian Reza Rizaldy</Text>
        <Gap height={9} />
        <Text style={styles.text}>+62 822-1832-9375</Text>
      </View>
      <View style={styles.button}>
        <Button title="UBAH PROFILE" />
        <Gap height={26} />
        <Button title="GANTI PASSWORD" />
        <Gap height={26} />
        <Button title="LOGOUT" />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.cardBlue2,
    height: 224,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 100, height: 100, borderRadius: 100 / 2},
  text: {fontSize: 18, color: colors.white, fontFamily: fonts.primary[600]},
  button: {
    justifyContent: 'center',
    paddingHorizontal: 41,
    marginTop: 35,
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
});
