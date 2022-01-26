import React, { useEffect } from 'react';
import { ActivityIndicator, View, Image } from "react-native" ;
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './src/screens/DrawerContent';
import { AuthContext } from './src/components/context';

import TabScreen from './src/screens/TabScreen';
import RootStackScreen from './src/screens/Login/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      // setUserToken('abc');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if( userName == 'user' && password == '1234' ) {
        try {
          userToken = 'abcd';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        } 
      } 
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('abcd');
      // setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken != null ? (
          <Drawer.Navigator 
            screenOptions={{
              headerTitle: (props) => ( // App Logo
              <Image
                style={{ width: 200, height: 50 }}
                source={require('./src/assets/logo2.png')}
                resizeMode='contain'
                align='right'
              />
            ),
            }}
            drawerContent={props => <DrawerContent {...props}/>}
          >
          <Drawer.Screen name="Inicio" component={TabScreen} />
        </Drawer.Navigator>
        )
        :
          <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;