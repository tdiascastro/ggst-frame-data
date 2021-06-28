import {Image, TouchableOpacity} from "react-native";
import React from "react";

export const ThumbButton = ({source}) => {
    return (
        <TouchableOpacity onPress={() => alert('todo!')}>
            <Image
                source={source}
                resizeMode={'contain'}
                onButtonPress={() => alert('todo!')}
            />
        </TouchableOpacity>
    )
}

