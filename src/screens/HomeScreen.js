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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.root}>
      {/* Toolbar */}
      <Appbar.Header style={Styles.toolbar} mode="center-aligned">
        <Appbar.Content title="Dashboard"></Appbar.Content>
      </Appbar.Header>

      {/* Content */}
      <View style={Styles.homeContainer}>
        <View>
          <Text variant="displaySmall">Howdy, Avishkar!</Text>
          <Text variant="bodyLarge" style={Styles.mv20}>
            Here is the list of your saved notes.
          </Text>
        </View>
      </View>

      <FAB
        label="New Note"
        icon="plus"
        style={Styles.fab}
        onPress={() => {
          navigation.navigate("AddScreen");
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
