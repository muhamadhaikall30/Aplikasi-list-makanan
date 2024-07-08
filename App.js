import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native';
import FoodList from './components/FoodList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/bglist.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.header}>Daftar Makanan</Text>
        <FoodList />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default App;
