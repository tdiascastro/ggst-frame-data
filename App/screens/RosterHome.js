import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import colors from '../constants/Colors'
import imageMap from '../constants/ImageMap'

import {ThumbButton} from "../components/ThumbButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.eerieBlack,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    portait: {
        marginLeft: 6,
        marginBottom: 2,
        justifyContent: 'flex-start',
    }
})

export default ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.nagoriyukyThumb}
                    navigation={navigation}
                    characterName={'Nagoriyuki'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.milliaThumb}
                    navigation={navigation}
                    characterName={'Millia Rage'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.chippThumb}
                    navigation={navigation}
                    characterName={'Chipp Zanuff'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.solThumb}
                    navigation={navigation}
                    characterName={'Sol Badguy'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.kyThumb}
                    navigation={navigation}
                    characterName={'Ky Kiske'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.mayThumb}
                    navigation={navigation}
                    characterName={'May'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.zatoThumb}
                    navigation={navigation}
                    characterName={'Zato-1'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.iNoThumb}
                    navigation={navigation}
                    characterName={'I-No'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.anjiThumb}
                    navigation={navigation}
                    characterName={'Anji Mito'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.leoThumb}
                    navigation={navigation}
                    characterName={'Leo Whitefang'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.faustThumb}
                    navigation={navigation}
                    characterName={'Faust'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.axlThumb}
                    navigation={navigation}
                    characterName={'Axl Low'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.potemkinThumb}
                    navigation={navigation}
                    characterName={'Potemkin'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.ramlethalThumb}
                    navigation={navigation}
                    characterName={'Ramlethal Valentine'}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.giovannaThumb}
                    navigation={navigation}
                    characterName={'Giovanna'}
                />
            </View>
        </View>
    )
}