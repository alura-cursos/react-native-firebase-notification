import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Login from './telas/Login';
import Principal from './telas/Principal';
import Post from './telas/Post';
import Notificacoes from './telas/Notificacoes';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Tab.Screen name="Post" component={Post} options={{ headerStyle: { backgroundColor: '#417fea' }}}/>
        <Tab.Screen name="Notificacoes" component={Notificacoes} options={{ headerStyle: { backgroundColor: '#417fea' }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}