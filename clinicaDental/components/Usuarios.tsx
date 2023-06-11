import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener la lista de usuarios desde el web service
    fetch('http://192.168.31.10:13173/api/usuarios')
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Usuarios:</Text>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.nombre}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userItem: {
    marginBottom: 8,
  },
});

export default UsuariosScreen;
