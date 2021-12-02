import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

let days = [
  {
    id: 1,
    day: 'Senin',
    navigation: 'Detail1'
  },
  {
    id: 2,
    day: 'Selasa',
    navigation: 'Detail2'
  },
  {
    id: 3,
    day: 'Rabu',
    navigation: 'Detail3'
  },
  {
    id: 4,
    day: 'Kamis',
    navigation: 'Detail4'
  },
  {
    id: 5,
    day: 'Jumat',
    navigation: 'Detail5'
  },
  {
    id: 6,
    day: 'Sabtu',
    navigation: 'Detail6'
  },
  {
    id: 7,
    day: 'Minggu',
    navigation: 'Detail7'
  },
];

export default function Home({navigation}) {
  const onPressCard = (days) => {
    navigation.navigate(days.navigation, days);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>TO DO LIST</Text>
      </View>
      {days.map((days) => (
        <TouchableOpacity
          key={days.id}
          style={styles.dayWrapper}
          onPress={() => onPressCard(days)}>
          <Text style={styles.dayText}>{days.day}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  dayText: {
    fontSize: 17,
  },
  dayWrapper: {
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'dodgerblue',
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  topWrapper: {
    backgroundColor: 'dodgerblue',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width,
  },
});
