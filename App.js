import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import customStyle from './src/commons/CustomStyle';

function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <>
                    <StatusBar barStyle="light-content" translucent={false}
                               backgroundColor={customStyle.PrimaryColor()} animated={true} />
                    <AppStack />
                </>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
