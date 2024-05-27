import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './app/Layout/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
