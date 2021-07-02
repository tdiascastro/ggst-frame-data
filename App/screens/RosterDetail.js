import React from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import CharactersDetails from "../components/CharacterDetails";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.eerieBlack,
    }
})

export default ({route}) => {
    return (
        <View style={styles.container}>
            <CharactersDetails
                characterName={route.params.characterName}
            />
        </View>
    );
};