import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { BottomHomeScreenProps, HomeScreenProps, TopHomeScreenProps } from '../interfaces/NavigationInterfaces';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function HomeScreen({ navigation }:TopHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Button title="Ir para Profile" onPress={() => navigation.navigate('Profile', { userId: 1 })}/>
      <Button title="Ir para About" onPress={() => navigation.navigate('About')}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:"#f2f3f5",
    gap:10
  },
  text:{
    color:'gray',
    fontWeight:'400'
  },
  title:{
    color:'black',
    fontWeight:'800'
  },
  img:{
    width:200,
    height:200,
    borderRadius:30
  }
})