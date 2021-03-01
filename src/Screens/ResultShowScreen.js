import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  navigation.getParam("id");
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const responce = await yelp.get(`/${id}`);
    setResult(responce.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View >
      <Text>{result.name}</Text>
      <FlatList
        style={styles.render} 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
  render: {
    marginBottom : 5
  },
});

export default ResultShowScreen;
