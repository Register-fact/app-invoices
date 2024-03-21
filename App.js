import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppInvoice } from './src/AppInvoice';
import { store } from './src/Invoices/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#fff' />
      <AppInvoice></AppInvoice>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
