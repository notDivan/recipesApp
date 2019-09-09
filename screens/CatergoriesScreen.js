import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colours from "../constants/Colours";
import CategoryGrid from "../components/CatagoryGrid";

const CatagoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CatergoryMeals",
            params: {
              categoyId: itemData.item.id
            }
          })
        }
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CatagoriesScreen.navigationOptions = {
  headerTitle: "Meal Catagories"
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default CatagoriesScreen;
