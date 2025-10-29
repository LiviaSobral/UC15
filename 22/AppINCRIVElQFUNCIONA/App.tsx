import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';
import Esconder from './components/Esconder';
import Saudacao from './components/Saudacao';
import ModoEscuroClaro from './components/ModoEscuroClaro';
import Tarefas from './components/TArefas';

export default function App() {
  return (
    <View style={styles.container}>
    <Contador/>
    <Tarefas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
