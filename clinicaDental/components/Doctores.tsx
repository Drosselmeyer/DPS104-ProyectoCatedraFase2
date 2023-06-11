import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const DoctoresScreen = () => {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    // Obtener la lista de doctores desde el web service
    fetch('hthttp://192.168.31.10:13173/api/doctores')
      .then(response => response.json())
      .then(data => {
        setDoctores(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Doctores:</Text>
      <FlatList
        data={doctores}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.doctorItem}>
            <Text>{item.nombre}</Text>
            <Text>Especialidad: {item.especialidad}</Text>
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
  doctorItem: {
    marginBottom: 8,
  },
});

export default DoctoresScreen;
