import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from '../screen/HomeScreen'
import DetailScreen from "../screen/DetailScreen"

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{
                    headerTitle: ""
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator