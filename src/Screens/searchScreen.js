import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Component/SearchBar";
import useResult from "../hooks/useResult";
import Resultslists from "../Component/Resultslists";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Resultslists
          result={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <Resultslists result={filterResultByPrice("$$")} title="Bit Pricier" />
        <Resultslists result={filterResultByPrice("$$$")} title="Big Spender"/>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
