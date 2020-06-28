import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import AppContainer from './src/AppNavigator';
import store from './store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
      <AppContainer {...this.props} />
      </PaperProvider>
    </StoreProvider>
  );
}