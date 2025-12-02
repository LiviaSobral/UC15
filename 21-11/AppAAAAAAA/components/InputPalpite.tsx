import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function InputPalpite(props:{num:number, setNum:React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <View>
      <TextInput style={styles.input} keyboardType='numeric' value={String(props.num)} onChangeText={(text) => {props.setNum(Number(text))}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width:200,
    borderRadius:10,
    boxShadow:"0px 0px 10px black"
  }
})