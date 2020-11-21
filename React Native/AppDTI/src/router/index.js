import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  UploadPhoto,
  Home,
  Profile,
  History,
  TopUp,
  TopUpSuccess,
  QRpayment,
  Transfer,
  TransferSuccess,
  TransferCheck,
  QRpaymentCheck,
  QRpaymentSuccess,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpSuccess"
        component={TopUpSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRpayment"
        component={QRpayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRpaymentCheck"
        component={QRpaymentCheck}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRpaymentSuccess"
        component={QRpaymentSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferCheck"
        component={TransferCheck}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccess"
        component={TransferSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
