import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Saudacao() {

    const [nome, setNome] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Digite seu nome' value={nome} onChangeText={setNome}/>
      <Text style={styles.text}>Olá, {nome}</Text>
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
  input:{
    width:200,
    backgroundColor:'white',
    fontSize:14
  },
  text:{
    color:'white'
  }})