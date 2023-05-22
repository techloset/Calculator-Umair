
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FunctionalKeys = (props) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, onPress: props.onPress, width: 60, height: 60, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }]} onPress={() => props.cal(props.text)}>

            <Text style={{ color: '#35FBD6', fontSize: 20, fontWeight: '700' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FunctionalKeys

const styles = StyleSheet.create({
    button: {
        shadowColor: "#282B33",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7
    }
})