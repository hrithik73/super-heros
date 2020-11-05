import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigation/AppNavigator"
import HomeScreen from './app/screen/HomeScreen';
import ListItems from './app/components/ListItems';

export default function App() {
  return (
    <HomeScreen />
  );
}
