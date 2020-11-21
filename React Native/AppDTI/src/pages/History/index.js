import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListHistory} from '../../components/molekul';

const History = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
        <ListHistory />
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({});
