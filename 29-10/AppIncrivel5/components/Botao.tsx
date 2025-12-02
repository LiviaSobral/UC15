import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useTema } from '../context/TemaContext'

export default function Botao() {
    const {temaEscuro, setTemaEscuro} = useTema();

  return (
    <View>
        <Button title={temaEscuro ? "Mudar para claro" : "Mudar para escuro"} onPress={() => setTemaEscuro(!temaEscuro)}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})