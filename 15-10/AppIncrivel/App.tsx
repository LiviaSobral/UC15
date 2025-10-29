import React from 'react'
import { TextInput, Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>
            Bem-vindo ao App Virus
        </Text>
        <Image source={{uri: 'https://i.ytimg.com/vi/DKAXsdil_BQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLAvBai2wV-Y_iyVXid6M19nI_KsDA'}} style={styles.image}></Image>

        <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} placeholder='Digite Seu Nome'></TextInput>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='Digite Seu Email' keyboardType='email-address'></TextInput>
            <View style={styles.buttonContainer}>
                <Button title='Enviar' onPress={() => alert('Formulario Enviado')} color="#3A90E2"></Button>
            </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding:20,
    justifyContent: 'center',
  },
  header:{
    fontSize: 28,
    fontWeight:'bold',
    marginVertical:20,
    color:'#333'
  },
  image: {
    width:120,
    height:120,
    marginBottom:30
  },
  form:{
    width: '100%',
    backgroundColor: '#fff',
    borderRadius:12,
    padding:20,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset: {width:0, height:4},
    shadowRadius:6,
    elevation:5
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
  footer: {
    marginTop: 40,
    color: '#888',
  }
});
