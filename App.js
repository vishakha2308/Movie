import React from 'react';
import { View, Text } from 'react-native';
import { RootNavigator } from './src/route';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
      </PersistGate>
    </Provider>
  )
}
export default App