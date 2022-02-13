import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    header: (props) => <Header
                        title={'Configuración'}
                        {...props} />,
                }}
            />

        </Stack.Navigator>
    );
};


export default SettingsStack;
