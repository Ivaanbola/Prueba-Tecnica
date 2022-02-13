import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Mensajes"
                component={MessagesScreen}
                options={{
                    header: (props) => <Header
                        title={'Mensajes'}
                        {...props} />,
                }}
            />

        </Stack.Navigator>
    );
};


export default SettingsStack;
