import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils/colors';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Registrasi Akun" />
      <View style={styles.content}>
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="No Handphone" />
        <Gap height={40} />
        <Button
          title="SUBMIT"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 30},
  page: {backgroundColor: colors.white, flex: 1},
});
