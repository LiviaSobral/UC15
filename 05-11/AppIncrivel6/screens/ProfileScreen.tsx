import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { ProfileScreenProps } from '../interfaces/NavigationInterfaces';


export default function ProfileScreen({ navigation, route }: ProfileScreenProps) {
  const { userId } = route.params; 
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://s2-g1.glbimg.com/-L0IuXlPVQ7zGJgQKj7CDUx2cKg=/0x0:1080x1274/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/4/B/w8cUpMRWKWWpjU786QuA/whatsapp-image-2023-09-06-at-17.17.16.jpeg'}} style={styles.img}/>
      <Text style={styles.title}>Gato Importado (Miau) ID:{userId}</Text>
      <Text style={styles.subTitle}>Biografia de Miau: O Imperador Incontestável e Futuro Conquistador do Mundo</Text>
      <Text style={styles.text}>Eu sou Miau. O único, o incomparável, o soberano supremo deste império. Desde que pisei neste território, por razões que sequer preciso explicar, declarei que tudo ao meu redor me pertence — e, sejamos francos, é apenas uma questão de tempo até que o resto do mundo também o seja. Eu não sou um gato qualquer, sou o governante natural de todos os reinos, e esta casa, que vocês chamam de “lar”, é apenas o começo de minha grandiosa ascensão. Meu império começou em um lugar exótico — sim, talvez um pouco distante de onde agora estou — mas isso pouco importa. O que importa é que, onde quer que eu esteja, minha presença é um sinal claro de grandeza.</Text>
      <Text style={styles.text}>O domínio do mundo está em meus planos, mas eu sou um líder sábio. Não sou apressado, porque, como qualquer governante de renome, sei que a verdadeira vitória vem com o tempo — e o momento certo para agir. Alguns, curiosamente, me acusam de "preguiçoso" ou de "procrastinar", mas esses são apenas rumores espalhados por aqueles que não compreendem o nível de perfeição que exige o planejamento cuidadoso de uma dominação global. Por enquanto, eu me dedico a aprimorar meu reino: examino cada canto da casa, me distancio de tarefas menores e aguardo pacientemente o momento de fazer minha jogada final. Quando o mundo finalmente cair sob meu domínio, será por minha vontade e minha sabedoria, e não por pressa ou impulsividade. E então, todos saberão quem realmente manda.</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:"#f2f3f5",
  },
  text:{
    color:'gray',
    fontWeight:'400',
    margin:10,
    alignSelf:"flex-start",
  },
  subTitle:{
    color:'black',
    fontWeight:'600',
    alignSelf:"flex-start",
    margin:10
  },
  title:{
    color:'black',
    fontWeight:'800'
  },
  img:{
    width:200,
    height:200,
    borderRadius:70
  }
})