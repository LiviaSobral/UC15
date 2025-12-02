import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Mensagem(props:{msg:string, color:string}) {
  return (
    <View>
      <Text style={[styles.text, {color: props.color}]}>{props.msg}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        fontSize:30
    }
})