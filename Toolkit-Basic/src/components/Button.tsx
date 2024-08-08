import React, { View, TouchableOpacity, Text } from 'react-native';

export default function Button () {

    return (
        <View>
            <TouchableOpacity>
                <Text>Começar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    button: {
        padding:20,
        width: 20
    },
    texto: {
        fontSize:20
    }
}
