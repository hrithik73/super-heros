import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AboutScreen from '../screen/AboutScreen';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}


export default AppNavigator
