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

const AddScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.root}>
      {/* Toolbar */}
      <Appbar.Header style={Styles.toolbar} mode="center-aligned">
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Appbar.Content title="Add Note"></Appbar.Content>
      </Appbar.Header>

      {/* Content */}
      <View style={Styles.homeContainer}>
        <View>
          <Text variant="bodyLarge" style={Styles.mv20}>
            You are about to save a new note, that is great!
          </Text>
        </View>
        <View>
          <TextInput
            label="Title"
            placeholder="Enter the title"
            mode="outlined"
          />
          <TextInput
            label="Content"
            placeholder="Type from here"
            mode="outlined"
            multiline={true}
            dense={true}
            style={[Styles.mv20, { height: 250 }]}
          />
          <Button
            style={Styles.mv20}
            mode="contained"
            onPress={() => {
              //   navigation.navigate("HomeScreen");
            }}
          >
            Save
          </Button>
        </View>
      </View>

      {/* Save note */}
    </SafeAreaView>
  );
};

export default AddScreen;
