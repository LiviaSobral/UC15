import React, { useEffect, useState } from 'react'
import * as Notifications from "expo-notifications";
import List, { Tarefa } from '../components/List';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Alert,StyleSheet, View, Button, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // Exibe um alerta visual na tela (banner)
    shouldShowAlert: true,
    // Reproduz som de notificação (se houver)
    shouldPlaySound: true,
    // Não altera o "badge" do app (aquele número no ícone)
    shouldSetBadge: false,
    // Mostra a notificação na parte superior (Android/iOS)
    shouldShowBanner: true,
    // Exibe na Central de Notificações (iOS 15+)
    shouldShowList: true,
  }),
});

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  async function cancelarTodos() {
      await Notifications.cancelAllScheduledNotificationsAsync();
      setTarefas([]);
      Alert.alert("Cancelado", "Todos os lembretes foram removidos.");
    }
  
      async function permissao() {
          const {status} = await Notifications.getPermissionsAsync()
          if(status !== "granted"){
              const {status:newStatus} = await Notifications.requestPermissionsAsync()
              if(newStatus !== "granted"){
                  Alert.alert("Permissão Negada","ACEITA ESSA MERDA!")
                  return;
              }
          }
          
          if(Platform.OS === "android"){
              await Notifications.setNotificationChannelAsync("Default", {
                  name:"Default",
                  importance: Notifications.AndroidImportance.MAX,
                  sound:"Default"
              });
          }
      }
      async function load() {
            try{
                const jsonTarefa = await AsyncStorage.getItem("@tasks")
                if(jsonTarefa && jsonTarefa !== "[{}]"){
                    Alert.alert(`${JSON.parse(jsonTarefa)[0]}`)
                    setTarefas([JSON.parse(jsonTarefa)])
                    console.log(JSON.parse(jsonTarefa)[0])
                }
            }catch(e){
                Alert.alert(`DEU MERDA ${e}`)
            }
        }
  
      useEffect(()=>{
        permissao()
        load()
      },[])
  
    return (
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            
              <List tarefas={tarefas} setTarefas={setTarefas}/>
              <Button title='Clear all Notifications' onPress={cancelarTodos}/>
          </View>
    )
  }
  
  const styles = StyleSheet.create({
      
  })