import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card(props:{imageURl:string, title:string, content:string}) {
    return (
      <View style={styles.component}>
        <Image source={{uri: props.imageURl}} style={styles.img}></Image>   
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
        <View style={styles.btns}>
            <TouchableOpacity style={styles.btnLike} onPress={() => {alert("You have liked this post")}}><Text>Like</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnShare} onPress={() => {alert("You have Shared this post")}}><Text>Share</Text></TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    component:{
        padding:20,
        width:380,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'left',
        backgroundColor:"#28292e",
        marginBottom: 20
    },
    btns:{
        flexDirection:'row-reverse',
        alignSelf:'flex-end'
    },
    btnLike:{
        margin:5,
        backgroundColor:'#de3131',
        borderRadius:100,
        padding:7,
    },
    btnShare:{
        margin:5,
        backgroundColor:'#3196de',
        borderRadius:100,
        padding:7,
    },
    img:{
        width:250,
        height:200,
        borderRadius:10
    },
    title:{
        fontSize: 25,
        fontWeight:'300',
        color:'white'
    },
    content:{
        fontSize: 15,
        color:'#9d9ea1'
    }
})