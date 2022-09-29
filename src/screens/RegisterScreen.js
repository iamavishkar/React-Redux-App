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

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.root}>
      {/* Toolbar */}
      <Appbar.Header style={Styles.toolbar} mode="center-aligned">
        <Appbar.Content title="Create account"></Appbar.Content>
      </Appbar.Header>

      <View style={Styles.loginFormContainer}>
        <TextInput style={Styles.mv20} label="Full Name" mode="outlined" />
        <TextInput label="Email Address" mode="outlined" />
        <TextInput style={Styles.mv20} label="Password" mode="outlined" />
        <Button
          style={Styles.mv20}
          mode="contained"
          onPress={() => {
            // navigation.navigate("Screen");
          }}
        >
          Register
        </Button>
        <Divider />
        <Button
          style={Styles.mv20}
          mode="outlined"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          Back to Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
