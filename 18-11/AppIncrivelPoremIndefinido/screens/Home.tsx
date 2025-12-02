import { StyleSheet, Text, View, TextInput, Alert,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User{
    name:string,
    idade:number
}

export default function Home() {
    const [user, setUser] = useState<User>({name:"",idade:0})

    useEffect(() =>{
        const load = async () =>{
            try{
                const jsonUser = await AsyncStorage.getItem("@user")
                if(jsonUser){
                    setUser(JSON.parse(jsonUser))
                }
            }catch(e){
                Alert.alert(`DEU MERDA ${e}`)
            }
        }
        load()
    },[])

    const update = async () =>{
        try{
            await AsyncStorage.setItem("@user", JSON.stringify(user))
        }catch(e){
            Alert.alert(`DEU MERDA ${e}`)
        }
    }

  return (
    <View style={styles.container}>
      <Text>Olá {user.name}</Text>
      <Text>Você tem {user.idade} Anos</Text>
      <TextInput style={styles.input} value={user.name} onChangeText={(text) => {setUser({name:text,idade:user.idade})}}/>
      <TextInput style={styles.input} value={String(user.idade)} keyboardType='numeric' onChangeText={(text) => {setUser({name:user.name,idade:Number(text.trim())})}}/>
      <Button title='Salvar' onPress={update}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:200,
    backgroundColor:"gray",
    margin:5
  }
})