import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles as styles} from '../styles/commonStyles'


export default function InputCalc(props :{ Calcula:(val:number, val2:number) => void, symb:string, val:number[]}) {
  return (
    <View>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => {props.val[0] = Number(text).valueOf(), props.Calcula(props.val[0], props.val[1])}}/>
        <Text style={styles.symbol}>{props.symb}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => {props.val[1] = Number(text).valueOf(), props.Calcula(props.val[0], props.val[1])}}/>
    </View>
  )
}

