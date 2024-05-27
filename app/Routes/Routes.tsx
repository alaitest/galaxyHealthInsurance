import { createNativeStackNavigator } from "@react-navigation/native-stack";

export enum MainRoutes {
  WELCOME_SCREEN = "WelcomeScreen",
  HOME = "Home",
  QUOTES = "Quotes",
  PROPOSALS = "Proposals",
  SETTINGS = "Settings",
  CREATE_QUOTE = "CreateQuote",
  CREATE_PROPOSALS = "CreateProposals",
}

export type RootStackParamList = {
  [MainRoutes.WELCOME_SCREEN]: {} | undefined;
  [MainRoutes.HOME]: {} | undefined;
  [MainRoutes.QUOTES]: {} | undefined;
  [MainRoutes.PROPOSALS]: {} | undefined;
  [MainRoutes.SETTINGS]: {} | undefined;
  [MainRoutes.CREATE_QUOTE]: {} | undefined;
  [MainRoutes.CREATE_PROPOSALS]: {} | undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type useNavType = {
  navigate: any;
};
