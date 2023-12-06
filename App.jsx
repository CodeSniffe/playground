import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import BottomNavigator from './src/navigation';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
