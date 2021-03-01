import React from "react"
import {View, Text, StyleSheet, TextInput} from "react-native"
import { Feather } from "@expo/vector-icons"


const SearchBar = ({term , onTermChange, onTermSubmit}) =>{
    return(
        <View style ={styles.backgroundStyle}>
            <Feather style ={styles.iconStyle}  name="search" size= {30}/>
            <TextInput
            style = {styles.inputStyle} 
            autoCapitalize = "none"
            autoCorrect = {false}
            placeholder="Search"
            value = {term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: "rgb(211,211,211)",
        height : 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle :{
        // borderColor: "black",
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle : {
            fontSize: 35,
            alignSelf: "center",
            marginHorizontal: 15
    }
})

export default SearchBar;