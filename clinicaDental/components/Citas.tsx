import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const CitasScreen = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Obtener la lista de citas desde el web service
    fetch('http://192.168.31.10:13173/api/citas')
      .then(response => response.json())
      .then(data => {
        setCitas(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Citas:</Text>
      <FlatList
        data={citas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.citaItem}>
            <Text>Paciente: {item.paciente_id}</Text>
            <Text>Doctor: {item.doctor_id}</Text>
            <Text>Fecha: {item.fecha}</Text>
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
  citaItem: {
    marginBottom: 8,
  },
});

export default CitasScreen;
