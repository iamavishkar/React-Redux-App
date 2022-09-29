import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          opacity: 1,
        },
      }}
      initialRouteName={LoginScreen}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
