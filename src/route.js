import React from 'react';
import { View, Text } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Favourite from './screens/Favourite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoviesDetails from './screens/MoviesDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false, }} />
        <Stack.Screen name="MoviesDetails" component={MoviesDetails} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export const Main = () => {
  return (
    <Tab.Navigator
      firstRoute='Home'
      screenOptions={{
        headerShown: false, tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'black', position: 'absolute' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <View>
                <Ionicons name='home' size={25} color={'#FFFFFF'} />
                <View style={{ height: 6, width: 6, borderRadius: 20, backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: 2 }}></View>
              </View>
              : <Ionicons name='home-outline' size={25}color={'#f5f5f5'} />
          ),
        }} />
        <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <View>
                <Ionicons name='heart' size={25} color={'#FFFFFF'} />
                <View style={{ height: 6, width: 6, borderRadius: 20, backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: 2 }}></View>
              </View>
              : <Ionicons name='heart-outline' size={25} color={'#f5f5f5'} />
          ),
        }} />
    </Tab.Navigator>
  )
}