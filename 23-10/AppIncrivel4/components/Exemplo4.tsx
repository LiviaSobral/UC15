import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Exemplo4() {
    useEffect(() =>{
        const intervalo =setInterval(() => {
            console.log("Executando cada 10 segundos")
        },10000)
        return () => clearInterval(intervalo);
    }, [])
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>⏱️ Intervalo ativo</Text>
    </View>
  )
}

const styles = StyleSheet.create({})