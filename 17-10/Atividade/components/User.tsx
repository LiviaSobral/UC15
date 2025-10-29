import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'

export default function User(props:{imageURl:string, name:string, age:number, bio:string}) {
    return (
      <View style={styles.component}>
        <Image source={{uri: props.imageURl}} style={styles.img}></Image>   
        <Text style={styles.title}>My name is {props.name}, I am {props.age} Years Old</Text>
        <Text style={styles.bio}>{props.bio}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    component:{
        padding:10,
        width:432,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#28292e",
        borderBottomWidth: 2,
        borderColor: '#1c1b1c',
    },
    img:{
        width:100,
        height:100,
        borderRadius:100,
        borderWidth: 1,
        borderColor: 'black'
    },
    title:{
        color: 'white',
        fontSize: 25,
        fontWeight:'300'
    },
    bio:{
        color: '#9d9ea1',
        fontSize: 20
    }
})