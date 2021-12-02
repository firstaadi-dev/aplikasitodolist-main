import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.elevated}>
          <Image
            source={require('../../assets/fotoprofil.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}> Nama: Firsta Adi Pradana</Text>
        <Text style={styles.text}> NIM: 21120118130059</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 256,
    height: 256,
    borderRadius: 128,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 12,
  },
});
