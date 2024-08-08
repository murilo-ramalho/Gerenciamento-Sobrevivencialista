import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Button from './src/components/Button';
import * as DevClient from 'expo-dev-client';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toolkit-Basic</Text>
      <Text>
        Este é um app teste para estudo

      </Text>
      <Button />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:40,
  }
});
