import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import BottomNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
