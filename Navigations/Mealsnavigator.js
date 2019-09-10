import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createTabNavigator
} from "react-navigation-tabs";

import { createAppContainer } from "react-navigation";
import CatergoriesScreen from "../screens/CatergoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetails from "../screens/MealDetail";
import Colours from "../constants/Colours";
import MealsItems from "../components/mealsItems";
import FavoritesScreen from "../screens/FavoriteScreen";

import { Ionicons } from "@expo/vector-icons";
const MealNavigator = createStackNavigator(
  {
    Categories: CatergoriesScreen,
    CatergoryMeals: {
      screen: CategoryMealScreen
    },
    MealDetail: MealDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colours.primary
      },

      headerTintColor: "white"
    }
  }
);

const MealsFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },

    Favorite: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colours.accent
    }
  }
);

export default createAppContainer(MealsFavNavigator);
