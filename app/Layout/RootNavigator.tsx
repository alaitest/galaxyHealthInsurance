import React, { lazy, Suspense } from "react";
import { Text, useColorScheme } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainRoutes } from "../Routes/Routes";
import Screen from "../Routes/Screen";
import ErrorBoundary from "../Utils/ErrorBoundary/errorBoundaries";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../Utils/Themes/Theme";
import { AppColor } from "../Utils";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const renderLoginNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName={MainRoutes.WELCOME_SCREEN}
        screenOptions={{ headerShown: false, navigationBarHidden: false }}
      >
        <Stack.Screen
          name={MainRoutes.WELCOME_SCREEN}
          component={Screen.BottomTabs}
        />
        <Stack.Screen
          name={MainRoutes.HOME}
          component={Screen.Home}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
        <Stack.Screen
          name={MainRoutes.QUOTES}
          component={Screen.Quotes}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
        <Stack.Screen
          name={MainRoutes.PROPOSALS}
          component={Screen.Proposal}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
        <Stack.Screen
          name={MainRoutes.SETTINGS}
          component={Screen.Settings}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
        <Stack.Screen
          name={MainRoutes.CREATE_QUOTE}
          component={Screen.CreateQuote}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
        <Stack.Screen
          name={MainRoutes.CREATE_PROPOSALS}
          component={Screen.CreateProposals}
          options={{
            statusBarColor: AppColor.primary,
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <ErrorBoundary>
      <PaperProvider theme={theme}>
        <NavigationContainer>{renderLoginNavigator()}</NavigationContainer>
      </PaperProvider>
    </ErrorBoundary>
  );
};

export default RootNavigator;
