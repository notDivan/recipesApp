import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colours from "../constants/Colours";
import MealsItems from "../components/mealsItems";

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealsItems
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemData.item.id }
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoyId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoyId");
  const selectedCatgory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCatgory.title
  };
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default CategoryMealScreen;
