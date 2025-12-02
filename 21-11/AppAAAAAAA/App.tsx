// import React, { useRef } from 'react';
// import { TextInput, Button, View } from 'react-native';

// export default function App() {
//   // Criamos uma referência para o TextInput
//   const inputRef = useRef<TextInput>(null); // inicialmente a ref aponta para null

//   return (
//     <View style={{ padding: 16 }}>
//       {/* Associamos a ref ao TextInput */}
//       <TextInput
//         ref={inputRef}
//         placeholder="Digite algo"
//         style={{ borderWidth: 1, borderColor: '#000', padding: 8 }}
//       />
//       <Button
//         title="Focar no input"
//         onPress={() => {
//           // Chamamos o método focus() do TextInput usando a ref
//           inputRef.current?.focus(); // ? verifica se current existe antes de chamar focus()
//         }}
//       />
//     </View>
//   );
// }
// import React, { useRef } from 'react';
// import { ScrollView, Text, Button, View } from 'react-native';

// export default function App() {
//   const scrollRef = useRef<ScrollView>(null); // referência para o ScrollView

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       {/* Botão para rolar até o final */}
//       <Button
//         title="Ir para o final"
//         onPress={() => {
//           // Chamamos o método scrollToEnd() do ScrollView usando a ref
//           scrollRef.current?.scrollToEnd({ animated: true }); // ? verifica se current existe
//         }}
//       />
//       <ScrollView
//         ref={scrollRef} // ligamos a ref ao ScrollView
//         style={{ marginTop: 16, borderWidth: 1, height: 200 }}
//       >
//         {/* Criamos 30 itens para demonstrar o scroll */}
//         {Array.from({ length: 30 }, (_, i) => (
//           // _ representa o valor do elemento (não usado aqui)
//           // i é o índice do elemento
//           <Text key={i} style={{ padding: 8 }}>
//             Item {i + 1}
//           </Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

import React, { useRef, useState } from 'react';
import InputPalpite from './components/InputPalpite';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BotaoEnviar from './components/BotaoEnviar';
import {StyleSheet, Button, View } from 'react-native';

export default function App() {
  const tentativas = useRef(0)
  const numeroSecretoSHHHH = useRef<number>(Math.floor(Math.random() * 100)+1)
  const [num,setNum] = useState<number>(0)

  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <InputPalpite num={num} setNum={setNum}/>
          <BotaoEnviar num={num} palpite={tentativas} setNum={setNum} numSecreto={numeroSecretoSHHHH}/>
          <Button title='Tentar de novo' onPress={() =>{numeroSecretoSHHHH.current = Math.floor(Math.random() * 100)+1, tentativas.current = 0}}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    marginTop:20
  }
})