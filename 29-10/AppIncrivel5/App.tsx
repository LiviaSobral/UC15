import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TemaProvider } from './context/TemaContext';
import { UserProvider } from './context/UserContext';
import Tela from './components/Tela';
import {TelaUser} from './components/TelaUser';

// const UsuarioContext = createContext({nome:"Visitante", idade:0});

// function useUsuario() {
//   return useContext(UsuarioContext);
// }

// function MostrarUsuario() {
//   const nome = useUsuario().nome; // Pega o nome direto do contexto
//   return ( <Text>Olá, {nome}!</Text> 
//   );
// }

// // 4️⃣ Componente intermediário (não usa o nome, só envolve)
// function Painel() {
//   const idade = useUsuario().idade;
//   return (
//     <View>
//       <Text>Painel do Usuário</Text>
//       <MostrarUsuario />
//       <Text>Você tem {idade} Anos!!</Text>
//     </View>
//   );
// }

export default function App() {
  const arr = {nome :"Leo Senac", idade:118}
  return (
    // O valor "Leonardo" será acessível por QUALQUER componente dentro do Provider
    // <View style={styles.container}>
    // <UsuarioContext.Provider value={arr}>
    //   <Painel />
    // </UsuarioContext.Provider>
    // </View>
    <UserProvider>
      <TelaUser/>
    </UserProvider>
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
