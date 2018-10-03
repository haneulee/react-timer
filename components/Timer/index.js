import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

export default class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          <Button
            iconName="play-circle"
            onPress={() => {
              alert("play-circle");
            }}
          />
          <Button
            iconName="stop-circle"
            onPress={() => {
              alert("stop-circle");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});
