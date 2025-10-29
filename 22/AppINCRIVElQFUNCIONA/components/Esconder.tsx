import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function Esconder() {
const [visivel, setVisivel] = useState<boolean>(true);


  return (
    <View style={styles.container}>
       <Button title={visivel ? 'Esconder Texto' : 'Mostrar Texto'} onPress={() => setVisivel(!visivel)}></Button>
       {visivel ? <Text style={styles.text}>TExto</Text> : null}
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
  }
})