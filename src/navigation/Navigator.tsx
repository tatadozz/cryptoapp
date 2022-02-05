import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './Routes';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import { Colors } from '../constants/Colors';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/List/List';
import { Button, IconButton } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor: Colors.bgTab,
              borderRadius: 7,
              height: 70,
              elevation: 0,
              borderTopWidth: 0
            },
        }}>
            <Tab.Screen name={Routes.MAIN_SCREEN} component={HomeScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image 
                      source={require('../../assets/home.png')}
                      resizeMode="contain"
                      style={{
                        width: 32, 
                        height: 32, 
                        tintColor: focused ? '#FFFFFF' : '#b9b7b9'
                      }}
                   />
                  </View>
                )
              }}
            />
            <Tab.Screen name={Routes.FAVORITES_SCREEN} component={FavoritesScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image 
                      source={require('../../assets/favorites.png')}
                      resizeMode="contain"
                      style={{
                        width: 38, 
                        height: 38, 
                        tintColor: focused ? '#FFFFFF' : '#b9b7b9'
                      }}
                   />
                  </View>
                )
              }}
            />
            <Tab.Screen name={Routes.WALLET_SCREEN} component={WalletScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image 
                      source={require('../../assets/wallet.png')}
                      resizeMode="contain"
                      style={{
                        width: 32, 
                        height: 32, 
                        tintColor: focused ? '#FFFFFF' : '#b9b7b9'
                      }}
                   />
                  </View>
                )
              }}
            />
            <Tab.Screen name={Routes.ACCOUNT_SCREEN} component={AccountScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View>
                    <Image 
                      source={require('../../assets/account.png')}
                      resizeMode="contain"
                      style={{
                        width:32, 
                        height: 32, 
                        tintColor: focused ? '#FFFFFF' : '#b9b7b9'
                      }}
                   />
                  </View>
                )
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  
})
