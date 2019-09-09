import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CatergoriesScreen from "../screens/CatergoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetails from "../screens/MealDetail";
import Colours from "../constants/Colours";

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

export default createAppContainer(MealNavigator);
