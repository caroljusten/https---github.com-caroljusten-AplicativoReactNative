import React from 'react';
import { View, StyleSheet, Text, Button, Dimensions, Image, TouchableOpacity } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                source={require('../../assets/logo.png')} 
                style={styles.logo}
                animation='zoomIn'
                resizeMode="contain"
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#6BDBF0', '#00BFDF']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Começar</Text>
                            <Icon
                                name='right'
                                color='#fff'
                                size={12}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>   
                 
            </View>     
        </View>    
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#404040',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});