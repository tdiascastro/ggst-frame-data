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

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.nagoriyukyThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.milliaThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.chippThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.solThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.kyThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.mayThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.zatoThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.iNoThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.anjiThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.leoThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.faustThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.axlThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.potemkinThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.ramlethalThumb}
                />
            </View>
            <View style={styles.portait}>
                <ThumbButton
                    source={imageMap.giovannaThumb}
                />
            </View>
        </View>
    )
}