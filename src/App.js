import {registerRootComponent} from "expo";
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import colors from './constants/Colors'

import {PortaitButton} from "./components/PortaitButton";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.eerieBlack,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    portait: {
        marginLeft: 8,
        marginBottom: 2,
        justifyContent: 'flex-start',
    }
})

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Nagoriyuki_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Millia_Rage_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Chipp_Zanuff_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Sol_Badguy_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Ky_Kiske_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_May_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Zato-1_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_I-No_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Anji_Mito_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Leo_Whitefang_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Faust_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Axl_Low_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Potemkin_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Ramlethal_Valentine_Icon.png')}
                    />
                </View>
                <View style={styles.portait}>
                    <PortaitButton
                        source={require('./assets/characters/thumbs/90px-GGST_Giovanna_Icon.png')}
                    />
                </View>
            </View>
        )
    };
}

registerRootComponent(App);

