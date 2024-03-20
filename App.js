import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppInvoice } from './src/AppInvoice';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#fff' />
      <AppInvoice></AppInvoice>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
