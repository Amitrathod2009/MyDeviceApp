import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import AccountScreen from './src/components/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceDetailsScreen from './src/components/DeviceDetailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './src/styles/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeTabIcon = ({color}) => (
  <MaterialCommunityIcons name="home-plus-outline" color={color} size={28} />
);
const deviceDetailTabIcon = ({color}) => (
  <MaterialIcons name="perm-device-info" color={color} size={28} />
);
const AccountTabIcon = ({color}) => (
  <MaterialCommunityIcons name="account" color={color} size={28} />
);
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:styles.tabBarStyle,
        tabBarLabelStyle:styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#724187',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tab.Screen
        name="Device Details"
        component={DeviceDetailsScreen}
        options={{
          headerShown: false,
          tabBarIcon: deviceDetailTabIcon,
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: AccountTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#724187" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
//#724187 header color
//#43388a subheader text - blue
//#cbcbcb gray color -botom stack
