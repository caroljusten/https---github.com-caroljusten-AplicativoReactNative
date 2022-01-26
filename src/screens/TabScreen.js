import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';

const Tela1Stack = createNativeStackNavigator();
const Tela2Stack = createNativeStackNavigator();
const Tela3Stack = createNativeStackNavigator();
const Tela4Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabScreen = ({navigation}) => {
  return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tela1StackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Tela2StackScreen}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <Icon name="notification" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tela3}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={Tela4}
        options={{
          tabBarLabel: 'Opções',
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" color={'black'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    

  );
};

export default TabScreen;

const Tela1StackScreen = ({navigation}) => {
  return (
    <Tela1Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Tela1Stack.Screen 
          name="Tela1" 
          component={Tela1} 
          options={{ 
          }} 
        />
    </Tela1Stack.Navigator>
  );
};


const Tela2StackScreen = ({navigation}) => {
  return (
    <Tela2Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Tela2Stack.Screen name="Tela2" component={Tela2}
        />
    </Tela2Stack.Navigator>
  );
};

const Tela3StackScreen = ({navigation}) => {
  return (
    <Tela3Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Tela2Stack.Screen name="Tela3" component={Tela3}
        />
    </Tela3Stack.Navigator>
  );
};

const Tela4StackScreen = ({navigation}) => {
  return (
    <Tela4Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Tela4Stack.Screen name="Tela4" component={Tela4}
        />
    </Tela4Stack.Navigator>
  );
};