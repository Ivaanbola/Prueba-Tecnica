import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import GameDetail from '../screens/GameDetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GameDetail"
                component={GameDetail}
                options={({ route }) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    );
};


export default HomeStack;
