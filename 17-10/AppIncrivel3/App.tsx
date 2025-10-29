import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saudacao from './Saudacao';
import SaudacaoNome from './SaudacaoNome';
import Botao from './Botao';
import Perfil from './Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Saudacao/>
      <SaudacaoNome nome="Roberto Carlos"/>
      <Botao title='Clique' onPress={() => {alert("Pão")}}/>
      <Botao title='Não CLICA' onPress={() => {alert("You picked a bad time to get lost friend")}}/>
      <Perfil nome='Carlos Roberto' idade={123}/>
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
});
