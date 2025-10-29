import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function Tarefas() {
    const [tarefas, setTarefas] = useState<string[]>([])

    const [novaTarefa, setNovaTarefa] = useState('')
    const adicionaTarefa = () => {
        if(novaTarefa.trim() === "") return
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Digite uma tarefa' value={novaTarefa} onChangeText={setNovaTarefa}/>
      <Button title='Adicionar tarefa' onPress={adicionaTarefa}></Button>
      <FlatList style={{ width: "100%",marginTop:20, backgroundColor:'red'}} data={tarefas} keyExtractor={(index) => index.toString()}  renderItem={({item,index}) => (
        <Text style={styles.text}>
            {index + 1}. {item}
        </Text>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#f5f5f5"
    },
    input:{
    width:200,
    backgroundColor:'white',
    fontSize:14
    },
    text:{
    color:'white'
    },
    tarefa:{
        fontSize:28,
        paddingVertical:5,
    }
})