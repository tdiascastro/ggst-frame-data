import React from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import colors from "../constants/Colors";
import CharacterInfo from "../util/CharactersGet";

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.eerieBlack,
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
            <Image
                style={styles.image}
                source={require('../assets/characters/portaits/293px-GGST_Nagoriyuki_Portrait.png')}
            />
            <CharacterInfo
                name={route.params.characterName}
            />
        </View>
    );
};