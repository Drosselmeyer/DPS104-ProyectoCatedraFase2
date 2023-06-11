/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Usuarios from './components/Usuarios';
import Pacientes from './components/Pacientes';
import Doctores from './components/Doctores';
import Citas from './components/Citas';

const MenuScreen = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Usuarios':
        return <Usuarios />;
      case 'Pacientes':
        return <Pacientes />;
      case 'Doctores':
        return <Doctores />;
      case 'Citas':
        return <Citas />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => handleComponentSelect('Usuarios')}
        >
          <Text style={styles.menuButtonText}>Usuarios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => handleComponentSelect('Pacientes')}
        >
          <Text style={styles.menuButtonText}>Pacientes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => handleComponentSelect('Doctores')}
        >
          <Text style={styles.menuButtonText}>Doctores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => handleComponentSelect('Citas')}
        >
          <Text style={styles.menuButtonText}>Citas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentContainer}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'gray',
    borderRadius: 4,
  },
  menuButtonText: {
    color: 'white',
  },
  componentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuScreen;