import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigation/AppNavigator"
import DetailScreen from './app/screen/DetailScreen';
import Screen from "./app/components/Screen"
import Text from "./app/components/Text"

export default function App() {
  return (
    <DetailScreen
      imageUrl="https://www.superherodb.com//pictures2//portraits//10//100//639.jpg"
      name="Spider-Man"
    />
  );
}
