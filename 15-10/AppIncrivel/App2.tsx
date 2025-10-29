import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
      <Image source={{ uri: 'https://st4.depositphotos.com/10493024/29677/i/450/depositphotos_296776806-stock-photo-live-lobster-standing-on-top.jpg'}} style={{width:170, height:100}}></Image>
      <Image source={require('./assets/lasgostas.jpg')} style={{width:250, height:200}}></Image>
      <Button title="Virus gratis" 
  onPress={() => alert('VIRUS VIRUS VIRUS VIRUS')} 
  color="#007AFF"></Button>
    <TouchableOpacity onPress={() => alert('Virus adquirido!')}
  style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginTop: 5 }}>
    <Text style={{ color: '#fff' }}>Virus Customizado</Text>
  </TouchableOpacity>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'red',
    fontWeight:'bold'
  }
});
