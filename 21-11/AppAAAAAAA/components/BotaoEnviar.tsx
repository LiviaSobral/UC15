import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import Mensagem from './Mensagem'

export default function BotaoEnviar(props:{num:number, setNum:React.Dispatch<React.SetStateAction<number>>, numSecreto:React.RefObject<number>, palpite:React.RefObject<number>}) {
    const [msg,setMsg] = useState<string>("")
    const [color,setColor] = useState<string>("gray")
    
    const compara = () =>{
        if(props.num === props.numSecreto.current){
            setMsg("Acertou")
            setColor("green")
            props.numSecreto.current = Math.floor(Math.random() * 100)+1
            props.palpite.current = 0
        }else{
            {props.num > props.numSecreto.current ? setMsg("Menor"): setMsg("Maior")}
            setColor("orange")
        }
        if(props.palpite.current === 10){
            setMsg("Passou do limite de tentativas")
            setColor("red")
        }
        props.setNum(0)
        props.palpite.current += 1
    }

  return (
    <View>
      <Button title='Tentar Numero' onPress={compara}/>
      <Mensagem msg={msg} color={color}/>
    </View>
  )
}

const styles = StyleSheet.create({})