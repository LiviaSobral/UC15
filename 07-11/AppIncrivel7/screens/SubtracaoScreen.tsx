import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import InputCalc from '../components/InputCalc';
import { commonStyles as styles} from '../styles/commonStyles'

const val: number[] = [0,0]
export default function SubtracaoScreen() {
    const [result, setResult] = useState<number>(0);

    const Calculo = (val1:number,val2:number) => { 
        if(val1 !== undefined || val2 !== undefined){
            setResult(val1 - val2)
        } 
    }

  return (
    <View style={styles.container}>
      <InputCalc Calcula={Calculo} symb='-' val={val} />
        <Text>=</Text>
      <TextInput style={styles.input} keyboardType='numeric' editable={false} value={result.toString()}/>
    </View>
  )
}

