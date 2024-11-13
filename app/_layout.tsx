import "./global.css";
import {NavigationContainer, type Theme, ThemeProvider} from "@react-navigation/native";
import {SplashScreen} from "expo-router";
import {StatusBar} from "expo-status-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NAV_THEME} from "@/lib/constants";
import FuelLoadSheetLoginPage from "./pages/login";
import FlightsTable from "./pages/search";

const LIGHT_MODE: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_MODE: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "loadsheet",
};

export default function RootLayout() {
  return (
    <>
      <NavigationContainer independent={true}>
          <ThemeProvider value={LIGHT_MODE}>
            <StatusBar />
            <GestureHandlerRootView style={{flex: 1}}>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={FuelLoadSheetLoginPage} />
                <Stack.Screen name="Search" component={FlightsTable} />
              </Stack.Navigator>
            </GestureHandlerRootView>
          </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
