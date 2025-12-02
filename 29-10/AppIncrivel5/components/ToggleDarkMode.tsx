import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import { useTema } from '../context/TemaContext'

export default function ToggleDarkMode() {
    const {temaEscuro, setTemaEscuro} = useTema()

  return (
    <View>
      <Switch value={temaEscuro} onValueChange={setTemaEscuro} trackColor={{false: '#ccc', true:'#666'}} thumbColor={temaEscuro ? '#fff' : '#333'}/>
    </View>
  )
}

const styles = StyleSheet.create({})