import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.border}>
            <Image source={ILNullPhoto} style={styles.image} />
            <IconAddPhoto style={styles.addphoto} />
          </View>
          <Text style={styles.name}>Reza</Text>
          <Text style={styles.profession}>RN Dev</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  image: {width: 110, height: 110, borderRadius: 110 / 2},
  border: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    color: colors.text.secondary,
  },
  content: {
    paddingBottom: 64,
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
