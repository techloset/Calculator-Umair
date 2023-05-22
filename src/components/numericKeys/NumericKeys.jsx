import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const NumericKeys = (props) => {

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: props.backgroundColor, onPress: props.onPress, width: 60, height: 60, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }]} onPress={() => props.numerics(props.text)}>

      <Text style={{ fontSize: 20, fontWeight: '700', color: props.color }} >{props.text}</Text>
    </TouchableOpacity>
  )
}
export default NumericKeys
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