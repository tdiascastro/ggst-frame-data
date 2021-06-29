import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import axios from "axios";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        backgroundColor: Colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
        marginRight: 15,
    },
})

export default class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        characterInfo: []
    }

    componentDidMount() {
        axios.get(`https://www.dustloop.com/wiki/api.php?action=cargoquery&format=json&requestid=&tables=ggstCharacters&fields=name%2C%20defense%2C%20guts%2C%20prejump%2C%20weight%2C%20backdash%2C%20umo&where=name%3D'${this.props.name}'`)
            .then(response => response.data.cargoquery.map(char => ({
                name: `${char.title.name}`,
                defense: `${char.title.defense}`,
                guts: `${char.title.guts}`,
                prejump: `${char.title.prejump}`,
                weight: `${char.title.weight}`,
                backdash: `${char.title.backdash}`,
                umo: `${char.title.umo}`,
            })))
            .then(characterInfo => {
                this.setState({characterInfo})
            })
            .catch((error) => console.error(error))
    }

    render() {
        const {characterInfo} = this.state;
        return (
            characterInfo.map(char => {
                const {name, defense, guts, prejump, weight, backdash, umo} = char;
                return (
                    <SafeAreaView style={styles.container}>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Name: {name}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Defense: {defense}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Guts: {guts}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Prejump: {prejump}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Weight: {weight}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Backdash: {backdash}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Unique Move: {umo}
                            </Text>
                        </View>
                        <View style={styles.separator}/>
                    </SafeAreaView>
                )
            })
        )
    }
}

