import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const View1 = () => (
  <View style={styles.view1}>
    <Text style={styles.text}>Hello,SER 423! My name is Zoe Shortman.</Text>
  </View>
);

const View2 = () => (
  <View style={styles.view2}>
    <Text style={styles.text}>Thanks for using my app!</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="View 1" component={View1} />
        <Tab.Screen name="View 2" component={View2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6', // Light Blue
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffcccb', // Light Red
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
