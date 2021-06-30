import React from "react";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import Colors from "../constants/Colors";
import CharactersDetails from "../components/CharacterDetails";

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.eerieBlack,
        flexDirection: 'row',
    },
    image: {
        width: screen.width * 0.3,
        height: screen.height * 0.3,
        resizeMode: 'contain',
    }
})

export default ({route}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CharactersDetails
                    characterName={route.params.characterName}
                />
            </ScrollView>
        </View>
    );
};