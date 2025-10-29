import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Exemplo5() {
    const [usuarios, setUsuarios] = useState<any[]>([]);
    useEffect(() =>{
        
        const buscarUsuario = async() => {
            try{
                console.log("Busacando dados...")

                const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados = await resposta.json()
                setUsuarios(dados);
            }catch(e){
                console.log("Erro ao buscar Usuarios: ",e)
            }

        }
        buscarUsuario()
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👥 Lista de Usuários</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 4 },
});