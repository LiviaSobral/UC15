import { Button, StyleSheet } from 'react-native'
import React from 'react'

export default function Botao(props:{title:string, onPress:() => void}) {
  return (
    <Button title={props.title} onPress={props.onPress}></Button>
  )
}

const styles = StyleSheet.create({
})