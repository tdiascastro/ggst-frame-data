import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import * as dustloopService from "../service/DustloopService";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.white,
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
        marginLeft: 15,
        marginRight: 15,
    },
})

const CharacterDetails = ({characterName}) => {
    const [characterDetail, setCharacterDetail] = useState()
    const [characterMoves, setCharacterMoves] = useState()

    useEffect(() => {
        async function getCharacterDetails() {
            const response = await dustloopService.getCharacterDetail(characterName)
            setCharacterDetail(response.data.cargoquery[0].title)
        }

        getCharacterDetails();

    }, []);

    useEffect(() => {
        async function getCharacterMoves() {
            const response = await dustloopService.getCharacterMoves(characterName)
            setCharacterMoves(response.data.cargoquery.map(move => move.title))
        }

        getCharacterMoves()
    }, []);

    if (!characterDetail || !characterMoves) {
        return null
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.header}>
                    {characterDetail?.name}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Defense: {characterDetail?.defense}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Guts: {characterDetail?.guts}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Prejump: {characterDetail?.prejump}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Weight: {characterDetail?.weight}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Backdash: {characterDetail?.backdash ? characterDetail.backdash : '-'}
                </Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Unique Move: {characterDetail?.umo}
                </Text>
            </View>
            <View style={styles.separator}/>
            {characterMoves?.map((move, index) => (
                <React.Fragment key={index}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Input: {move?.input}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Damage: {move?.damage}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Guard: {move?.guard}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Name: {move?.name}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Startup: {move?.startup}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Active: {move?.active}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Recovery: {move?.recovery}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            onBlock: {move?.onBlock}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            onHit: {move?.onHit}
                        </Text>
                    </View>
                    <View style={styles.separator}/>
                </React.Fragment>
            ))}
        </SafeAreaView>
    )
}

export default CharacterDetails;