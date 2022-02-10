import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </Provider>
    );
}

export default App;
