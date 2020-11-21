import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>Rahadian Reza R</Text>
        <Text style={styles.job}>+62 822-1832-9375</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  image: {width: 46, height: 46, borderRadius: 46 / 2},
  container: {flexDirection: 'row'},
  content: {justifyContent: 'center'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginLeft: 5,
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginLeft: 5,
  },
});
