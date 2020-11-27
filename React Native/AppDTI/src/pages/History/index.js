import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListHistory} from '../../components/molekul';
import {JSONItemPrice} from '../../assets';

const History = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
        {JSONItemPrice.data.map((item) => {
          return (
            <ListHistory
              key={item.id}
              prc={item.prc}
              telp={item.telp}
              date={item.date}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({});
