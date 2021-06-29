import {Image, TouchableOpacity} from "react-native";
import React from "react";

export const ThumbButton = ({navigation, source, characterName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.push('RosterDetail', {
            characterName,
        })}>
            <Image
                source={source}
                resizeMode={'contain'}
            />
        </TouchableOpacity>
    )
}

