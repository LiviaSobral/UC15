import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

export default function Contador() {

  const [contador, setContador] = useState<number>(0)
  return (
    
    <View style={styles.container}>
    
      <Text style={styles.text}>Contador: {contador}</Text>
      
      <Button title='clique' onPress={() => setContador(contador+1)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white'
  }})
