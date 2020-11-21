import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconTopup} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Feature = ({text, profile}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={profile} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 7,
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
  },
  image: {width: 24, height: 24},
});
