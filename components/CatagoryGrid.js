import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGrid = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.gridItem}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    //fontFamily: "openSan-Bold",
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoryGrid;
