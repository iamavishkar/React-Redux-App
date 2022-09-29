import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/StackNavigator";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
