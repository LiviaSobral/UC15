import {ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native'; 

export default function App() { 
  return ( 
    <View style={styles.container}> 
    <Text style={styles.text}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text> 
    <Image source={{uri:'https://i.ytimg.com/vi/DKAXsdil_BQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLAvBai2wV-Y_iyVXid6M19nI_KsDA'}} style={styles.img}></Image>
    <Image source={require('./assets/lagostaGarfo.jpg')} style={styles.img}></Image>
    <Button title='Virus Gratis' onPress={() => alert('VIRUS VIRUS VIRUS VIRUS')} color="#007AFF"></Button>
    <TouchableOpacity onPress={() => alert('VIRUS!!!')} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5 }}>
    <Text style={{ color: '#fff' }}>Virus Customizado</Text>
    </TouchableOpacity>
    <TextInput placeholder="Digite seu nome" style={{ borderWidth: 1, padding: 10, width: 200 }} onChangeText={(texto) => console.log(texto)}/>
    <ScrollView style={{padding:30, margin: 10, height:50, backgroundColor:"white" }}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>

    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>

    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>

    {/* ...outros itens */}
    </ScrollView>
    </View> 
  ); 
  } 

  const styles = StyleSheet.create(
    { container: { 
        flex: 1, 
        backgroundColor: 'black', 
        alignItems: 'center', 
        justifyContent: 'center', }, 

      text:{ 
        color:'red', 
        fontWeight:'bold' },

      img:{
        width:200,
        height:100
    }
  });
