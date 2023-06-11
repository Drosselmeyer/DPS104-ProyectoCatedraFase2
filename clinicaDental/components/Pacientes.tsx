import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const PacientesScreen = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Obtener la lista de pacientes desde el web service
    fetch('http://192.168.31.10:13173/api/pacientes')
      .then(response => response.json())
      .then(data => {
        setPacientes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Pacientes:</Text>
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pacienteItem}>
            <Text>{item.nombre}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Género: {item.genero}</Text>
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
  pacienteItem: {
    marginBottom: 8,
  },
});

export default PacientesScreen;
