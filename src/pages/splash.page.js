import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Initial');
        }, 2000);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>TODO</Text>
            <Text style={styles.text}>LIST</Text>
            <Text style={styles.text}>APP</Text>
            <Text style={styles.textBy}>by:Firsta</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    textBy:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})
