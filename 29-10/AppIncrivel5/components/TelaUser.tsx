import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useUser } from "../context/UserContext";

export const TelaUser = () => {
  const { user, setUser } = useUser();

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.texto}>Olá, {user.nome}!</Text>
      ) : (
        <Text style={styles.texto}>Nenhum usuário logado</Text>
      )}

      <Button title="Login como João" onPress={() => setUser({ nome: "João" })} />
      <View style={{ height: 10 }} />
      <Button title="Logout" color="red" onPress={() => setUser(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
});