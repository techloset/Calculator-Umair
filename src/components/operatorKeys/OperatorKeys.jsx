import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OperatorKeys = (props) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, color: props.color, width: 60, height: 60, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }]} onPress={() => props.operate(props.text)}>



            {props.Icon}


        </TouchableOpacity>
    )
}

export default OperatorKeys

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
