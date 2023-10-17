import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // spaces children evenly btw start and end
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", // wraps when flex items overflow their container
  },
  square: {
    backgroundColor: "lightblue",
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "80%" },
  circular: {
    borderColor: "lightblue",
    borderWidth: 2,
    borderRadius: 3,
    width: 14,
    height: 14,
  },
});

export default Task;
