import React, { useEffect, useRef, useState } from "react";
import Styles from "../theme/Styles";
import {
  StatusBar,
  View,
  BackHandler,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import {
  Avatar,
  Text,
  IconButton,
  Appbar,
  Chip,
  Card,
  FAB,
  TextInput,
  Button,
  Divider,
} from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.root}>
      {/* Toolbar */}
      <Appbar.Header style={Styles.toolbar} mode="center-aligned">
        <Appbar.Content title="Login to account"></Appbar.Content>
      </Appbar.Header>

      <View style={Styles.loginFormContainer}>
        <TextInput label="Email Address" mode="outlined" />
        <TextInput style={Styles.mv20} label="Password" mode="outlined" />
        <Button
          style={Styles.mv20}
          mode="contained"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          Login
        </Button>
        <Divider />
        <Button
          style={Styles.mv20}
          mode="outlined"
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          Create account
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
