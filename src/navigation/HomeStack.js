import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameDetail from '../screens/GameDetail';
import Header from '../components/Header';
import ProfileScreen from '../screens/ProfileScreen';
import ResumeScreen from '../screens/ResumeScreen';

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: (props) => <Header
                        title={'Productos'}
                        {...props} />,

                }}
            />
            <Stack.Screen
                name="GameDetail"
                component={GameDetail}
                options={({ route }) => ({
                    header: (props) => <Header
                        title={route.params?.item?.name}
                        goBack
                        {...props} />,
                })}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={({ route }) => ({
                    header: (props) => <Header
                        title={'Mi perfil'}
                        goBack
                        {...props} />,
                })}
            />
            <Stack.Screen
                name="ResumeScreen"
                component={ResumeScreen}
                options={({ route }) => ({
                    header: (props) => <Header
                        title={'Resumen de compra'}
                        goBack
                        {...props} />,
                })}
            />
        </Stack.Navigator>
    );
};


export default HomeStack;
