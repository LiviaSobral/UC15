import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function SaudacaoNome(props: {nome:string}) {
  return (
      <Text style={styles.text}>Olá {props.nome}</Text>
  )
}

const styles = StyleSheet.create({
    text:{
        color:'blue',
        fontSize:24
    }
})