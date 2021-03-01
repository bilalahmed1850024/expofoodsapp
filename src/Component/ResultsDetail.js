import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Resultslists from "./Resultslists"

const ResultsDetail = ({ result }) => {
  return (
    <View style = {styles.container} >
      <Image style={styles.Image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating}stars,{result.review_count} Review
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        marginLeft: 15
    },
  Image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultsDetail;
