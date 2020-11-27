import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';
import {colors} from '../../utils/colors';
import {Firebase} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
    fullName: '',
    noHandphone: '',
  });

  const onContinue = () => {
    console.log(form);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log('register success', success);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log('error register: ', errorMessage);
        // ...
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Registrasi Akun" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="Email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          <Gap height={24} />
          <Input
            label="Nama Lengkap"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="No Handphone"
            value={form.noHandphone}
            onChangeText={(value) => setForm('noHandphone', value)}
          />
          <Gap height={40} />
          <Button title="SUBMIT" onPress={onContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {padding: 40, paddingTop: 30},
  page: {backgroundColor: colors.white, flex: 1},
});
