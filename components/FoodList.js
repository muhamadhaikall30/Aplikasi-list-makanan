import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');

  const tambahMakanan = useCallback(() => {
    if (nama && harga) {
      const makananBaru = { nama, harga };
      setFoods([...foods, makananBaru]);
      setNama('');
      setHarga('');
    }
  }, [nama, harga, foods]);

  const hapusMakanan = useCallback((index) => {
    setFoods(foods.filter((_, i) => i !== index));
  }, [foods]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Makanan"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga"
        value={harga}
        onChangeText={setHarga}
        keyboardType="numeric"
      />
      <Button title="Tambah Makanan" onPress={tambahMakanan} />
      <FlatList
        data={foods}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.makananContainer}>
            <View style={styles.infoMakanan}>
              <Text style={styles.namaMakanan}>{item.nama}</Text>
              <Text style={styles.hargaMakanan}>Rp {item.harga}</Text>
            </View>
            <TouchableOpacity onPress={() => hapusMakanan(index)}>
              <Text style={styles.tombolHapus}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  makananContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  infoMakanan: {
    flex: 1,
    marginLeft: 10,
  },
  namaMakanan: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hargaMakanan: {
    fontSize: 16,
    color: 'gray',
  },
  tombolHapus: {
    color: 'red',
  },
});

export default FoodList;
