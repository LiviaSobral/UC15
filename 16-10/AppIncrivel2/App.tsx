import React from 'react'
import { TextInput, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

export default function App() {
  return (
    <LinearGradient 
    style={styles.container} 
    colors={["#12111c","#1d1c2e","#12111c"]}>
        <Text style={styles.title}>ABRACADABRA</Text>
        <Image source={{uri: 'https://i.ytimg.com/vi/DKAXsdil_BQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLAvBai2wV-Y_iyVXid6M19nI_KsDA'}} style={styles.img}></Image>
        <View>
            <TextInput style={styles.input} placeholder="Digite seu nome"></TextInput>
            <TextInput style={styles.input} placeholder='Digite seu Email' keyboardType='email-address'></TextInput>
            <TextInput style={styles.input} placeholder='Digite o nome do seu Crustáceo Favorito'></TextInput>
            <TouchableOpacity onPress={() => alert('AAAAAAAAAAAAA')} style={styles.btn}><Text style={styles.btnText}>Clique AQUI AGORA!!</Text></TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({ 
        container: {
            flexGrow: 1,
            alignItems:'center',
            justifyContent:"center"
        }, 

        title:{ 
         color:'red', 
            fontWeight:'bold',
            fontSize:30
        },
        
        input:{
            borderWidth: 1,
            borderColor:'#a39b9c',
            backgroundColor: '#5e5a5a',
            color: 'white',
            marginTop:10,
            width: 350
        },

        btn:{
            backgroundColor: '#5e5a5a',
            padding: 10,
            borderRadius: 10,
            marginTop:20,
            borderWidth:1,
            borderColor:'#a39b9c'
        },
        btnText:{
            color:'white',
            fontWeight:'bold'
        },

        img:{
            width:300,
            height:170,
            borderWidth:2,
            borderColor:'#a39b9c',
            borderRadius:100
        }
  });
