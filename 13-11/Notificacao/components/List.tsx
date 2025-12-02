import { StyleSheet, Text, View, FlatList, TextInput,Button, Alert } from 'react-native'
import React from 'react'
import * as Notifications from "expo-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';

let title:string = ""
let time:number = 0

export interface Tarefa {
    title:string,
    time:number
}

export default function List(props:{tarefas:Tarefa[], setTarefas:React.Dispatch<React.SetStateAction<Tarefa[]>>}) {
    const enviarNotificacao = async (tarefa:Tarefa) => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Notificação Ilegal",
            body: tarefa.title,
            sound: true, 
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: tarefa.time,
            repeats: true,
          },
        });
      };

      async function save(){
        props.setTarefas([...props.tarefas, {title,time}])
        enviarNotificacao({title,time})
        try{
          const tarefa = JSON.stringify(props.tarefas)
          await AsyncStorage.setItem("@tasks", tarefa)
        }catch(e){
          Alert.alert(`DEU MERDA ${e}`)
        }
      }

  return (
    <View style={styles.container}>
        <TextInput placeholder='Titulo Da Tarefa' onChangeText={(text) => {title = text}}/>
        <TextInput placeholder='Tempo Em Segundos' keyboardType='numeric' onChangeText={(text) => {time = Number(text)}} />
        <Button title='Criar Nova Tarefa' onPress={() => {save()}}/>
        <FlatList style={{ width: "90%",marginTop:20, backgroundColor:'gray'}} data={props.tarefas} keyExtractor={(index) => index.toString()}  renderItem={({item,index}) => (
        <Text>{index + 1}- Titulo: {item.title} Tempo: {item.time}</Text>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})