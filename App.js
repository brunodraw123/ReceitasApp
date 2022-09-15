import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/Pages/HomeScreen';
import IdeiaScreen from './src/Pages/IdeiaScreen';
import Destaques from './src/components/Destaques';
import Praticas from './src/components/Praticas';
import Fitness from './src/components/Fitness';
import Doces from './src/components/Doce';
import Vegano from './src/components/Vegano';
import Salgado from './src/components/Salgado';

const brown = '#853D00';
const orange = '#FF7400';
const whiteOrange = '#FFECDC';
/* Aqui nós informamos qual tela recebera o icone */
/* Em 'name' informamos o nome do ícone Ionicons */
const icons = {
  Home: {
    name: 'ios-home'
  },
  Ideias: {
    name: 'ios-people'
  }
};

const Stack = createStackNavigator();
function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Receitas" component={HomeScreen} options={{
        headerTransparent: 'true',
        title: "",
      }}></Stack.Screen>

      <Stack.Screen name="Destaques da Semana" component={Destaques} options={
        style.headerNav} />

      <Stack.Screen name="Receitas Práticas" component={Praticas} options={
        style.headerNav} />

      <Stack.Screen name="Pratos Fitness" component={Fitness} options={
        style.headerNav} />

      <Stack.Screen name="Doces" component={Doces} options={
        style.headerNav} />

      <Stack.Screen name="Pratos Veganos" component={Vegano} options={
        style.headerNav} />

      <Stack.Screen name="Salgados" component={Salgado} options={
        style.headerNav} />


    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        },
        tabBarActiveTintColor: "#853D00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            "display": "flex"
          },
          null
        ]
      })
      }
      >
        <Tab.Screen name="Home" component={Home}
          options={style.logo}
        />
        <Tab.Screen name="Ideias" component={IdeiaScreen}
          options={style.logo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  logo: {
    headerTitleStyle: {
      color: orange,
    },
    headerStyle: {
      elevation: 0, // remove shadow on Android.
      shadowOpacity: 0, // remove shadow on iOS.
      borderBottomWidth: 0 // Just in case.
    }
  },
  headerNav:
  {
    headerTitleStyle: {
      fontSize: 16,
      color: 'grey',
    },
    headerStyle: {
      height: 40,
      elevation: 0, // remove shadow on Android.
      shadowOpacity: 0, // remove shadow on iOS.
      borderBottomWidth: 0, // Just in case.
    }
  }
})
