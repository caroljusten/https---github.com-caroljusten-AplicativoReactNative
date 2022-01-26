import React from 'react';
import { View, StyleSheet, Text, Button, Dimensions, Image, TouchableOpacity, Platform, TextInput } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../../components/context';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleValidUser = (val) => {
        if ( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
        setData({
                ...data,
                isValidUser: false
        });
        }
    } 

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (username, password) => {
        signIn(username, password);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bem Vindo(a)!</Text>
            </View>  
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Usuário</Text>
                <View style={styles.action}>
                    <Icon
                        name="user"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Insira seu nome de usuário"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Icon
                            name="check"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>    
                    : null}
                </View>

                { data.isValidUser ? null :
                <Animatable.View
                    animation="fadeInLeft" duration={500}
                >
                    <Text style={styles.errorMsg}>Usuário deve possuir mais que 4 caracteres</Text>
                </Animatable.View>
                }

                <Text style={[styles.text_footer, {
                    marginTop:35
                }]}>Senha</Text>
                <View style={styles.action}>
                    <Icon
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Insira sua senha"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="black"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="black"
                            size={20}
                        />
                        }
                    </TouchableOpacity>     
                </View>

                { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }
            
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {loginHandle( data.username, data.password )}}
                    >
                    <LinearGradient
                        colors={['#6BDBF0', '#00BFDF']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Entrar</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#00BFDF',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#00BFDF'
                    }]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>  
        </View>    
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00BFDF'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });