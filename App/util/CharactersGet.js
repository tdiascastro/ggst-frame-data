import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

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
        characterInfo: [],
        moveData: [],
    }

    componentDidMount() {
        // const result = await getCharactersDetails(this.props.characterName)
        // console.log(result);
    }

    render() {
        const {characterInfo, moveData} = this.state;
        // return (
        //
        // )

        // return (
        //     characterInfo.map(char => {
        //         const {name, defense, guts, prejump, weight, backdash, umo} = char;
        //         return (
        //             <SafeAreaView style={styles.container}>
        //                 <ScrollView>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Name: {name}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Defense: {defense}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Guts: {guts}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Prejump: {prejump}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Weight: {weight}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Backdash: {backdash}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                     <View style={styles.row}>
        //                         <Text style={styles.text}>
        //                             Unique Move: {umo}
        //                         </Text>
        //                     </View>
        //                     <View style={styles.separator}/>
        //                 </ScrollView>
        //             </SafeAreaView>
        //         )
        //     })
        // )
    }
}

