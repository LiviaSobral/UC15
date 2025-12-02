import { StyleSheet, Text, View, ScrollView,Button } from 'react-native'
import React from 'react'
import { BottomAboutScreenProps, TopAboutScreenProps } from '../interfaces/NavigationInterfaces'


export default function AboutScreen({ navigation }:TopAboutScreenProps) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center', justifyContent:'center'}}>
       <Button title="Voltar para Home" onPress={() => navigation.goBack()}/>
      <Text style={styles.title}>Miau</Text>
      <Text style={styles.subTitle}>Miau: O Gato Supremo e a Filosofia da Preguiça Ativa</Text>
      <Text style={styles.text}>Miau, o gato em questão, não é um simples felino. Ele é, na verdade, um enigma disfarçado de criatura doméstica, cujo comportamento descomplicado esconde uma profundidade filosófica inacessível à maioria dos mortais. Sua habilidade de realizar absolutamente nada por horas seguidas é, na verdade, um grande experimento existencial — uma forma de desafiar as leis do tempo e do espaço enquanto medita sobre os mistérios do universo, ou talvez apenas sobre a ausência de alimentos. Quando finalmente decide se mover, é com a precisão de um predador calculando seu próximo grande movimento… que geralmente é apenas pegar uma bolinha de lã.</Text>
      <Text style={styles.text}>O miado de Miau, embora pareça um simples pedido por atenção, é, na realidade, um grito cósmico, um lembrete de sua presença imbatível no mundo. Ele é, sem dúvida, o mestre da arte de ser simultaneamente o centro e a periferia de tudo. Cada ação, desde a escolha de um canto para dormir até o modo como ignora a comida por horas, reflete um entendimento profundo de sua própria magnificência. Miau não busca ser entendido — ele só quer ser adorado, ou, no mínimo, alimentado de acordo com seus próprios termos.</Text>
      <Text style={styles.subTitle}>A Filosofia da Preguiça Ativa: Uma Análise Comportamental de Miau</Text>
      <Text style={styles.text}>A "Filosofia da Preguiça Ativa", observada no comportamento do gato doméstico conhecido como Miau, apresenta-se como uma abordagem paradoxalmente eficaz e estratégica de interação com o ambiente. Em seu núcleo, esta filosofia propõe que a imobilidade aparente do animal não deve ser interpretada como mera inatividade, mas como um estado reflexivo de observação e cálculo. Durante os períodos em que Miau permanece imóvel, ele parece engajar-se em uma forma de meditação ativa, onde o mundo ao seu redor é absorvido de maneira quase hipnótica. Aparentemente relaxado, o gato está, na verdade, avaliando sua realidade, interpretando os estímulos e monitorando o comportamento dos humanos ao seu redor. Este comportamento pode ser interpretado como uma forma de preparação estratégica, onde cada observação e cada micro movimento do ambiente é integrado ao seu processo decisional — ele não está simplesmente "esperando", mas, em termos comportamentais, está acumulando informações para uma ação futura.</Text>
      <Text style={styles.text}>A segunda característica fundamental desta filosofia envolve a noção de "ação deliberada", onde o gato exibe um controle notável sobre os momentos em que decide interagir com seu ambiente. Ao contrário de outros predadores que atuam com base na necessidade imediata de caçar ou se alimentar, Miau pratica o que pode ser descrito como uma ação de alto impacto e baixo custo. Cada movimento, desde o salto abrupto até a interação com objetos do ambiente, é realizado com uma precisão que sugere um elevado grau de autoconsciência e escolha estratégica. O ponto crucial da Preguiça Ativa é que, ao evitar movimentos desnecessários e, de fato, o esforço físico excessivo, Miau se preserva para momentos de maior relevância, os quais ele, por sua própria natureza, decide quando e como realizar. Assim, o conceito de preguiça ativa reflete um mecanismo evolutivo de otimização energética, onde a inatividade aparente é, na verdade, uma estratégia adaptativa de eficiência máxima.</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
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
    borderRadius:30
  }
})