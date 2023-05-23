import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Input, TextInput, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import NumericKeys from '../../components/numericKeys/NumericKeys';
import OperatorKeys from '../../components/operatorKeys/OperatorKeys';
import FunctionalKeys from '../../components/functionalKeys/FuntionalKeys';
import Icon from 'react-native-vector-icons/FontAwesome5/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = () => {
    const [light, setLight] = useState(false)
    const [result, setResult] = useState('')
    const [answer, setAnswer] = useState('')
    const changeMode = () => {
        setLight(!light)
    }

    const calculate = (text) => {
        if (text === 'AC') {
            setResult('');
            setAnswer('')

        } else if (text === 'refresh') {
            setResult(result.substring(0, result.length - 1));
        } else if (text === '.' && result.includes('.')) {

        } else if (text === '%' && result.includes('%')) {

        }
        else if (['+', '-', '*', '/', '%', '.'].includes(text) && ['+', '-', '*', '/', '%', '.'].includes(result.charAt(result.length - 1))) {

        } else if (text === '=' && !result) {
            setResult('')
        } else if (text === '=') {
            try {
                const ans = Number(eval(result).toFixed(3));
                setAnswer('=' + ans.toString());
                setResult('')
                // expressionsCalculated++;
            } catch (error) {
                setAnswer('Error');
                setResult('')
            }
        } else if (text === '+/-') {
        } else if (text === '=') {
            setAnswer('=', answer + text)
        }

        else {
            setResult(result + text);
        }

    };
    return (
        <View style={[{ flex: 1, }, { backgroundColor: light ? 'black' : 'white' }]} >
            <StatusBar backgroundColor={light ? 'black' : 'white'} barStyle="light-content" />
            <View style={{ flex: 0.6, justifyContent: 'space-between', }}>
                <View style={[{
                    width: 100, height: 40, borderRadius: 10, alignSelf: 'center', marginTop: 30,
                    display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 15
                }, { backgroundColor: light ? '#2A2D37' : '#F5F3F3' }]}>
                    <TouchableOpacity onPress={() => changeMode()}>
                        <Octicons name='sun' size={25} color={!light ? 'black' : 'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeMode()}>
                        <Ionicons name='md-moon-outline' size={25} color={!light ? 'white' : 'white'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 0.5, }}>

                <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Text style={{ color: light ? '#FFFFFF' : '#000000', fontSize: 40, fontWeight: '600', marginRight: 20, }}  >
                        {answer}
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: 20 }} >



                    <Text style={{ color: light ? '#FFFFFF' : '#000000', fontSize: 40, fontWeight: '600', marginRight: 20, }}  >
                        {result}

                    </Text>

                </View>
            </View>

            <View style={[{ flex: 1.7, borderTopRightRadius: 25, borderTopLeftRadius: 25, }, { backgroundColor: light ? '#2A2D37' : '#F5F3F3' }]}>

                <View style={{ marginTop: '9%', gap: 20 }}>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>


                        <FunctionalKeys text='AC' backgroundColor={light ? 'black' : '#FFFFFF'} cal={calculate} />

                        < FunctionalKeys text='+/-' backgroundColor={light ? 'black' : '#FFFFFF'} cal={calculate} />
                        <OperatorKeys text='%' operate={calculate} Icon={<Icon name="percentage" size={23} color='#35FBD6' />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <OperatorKeys text='/' operate={calculate} Icon={<Icon name="divide" size={25} color="#EB6363" />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 0 }}>

                        <NumericKeys numerics={calculate} text='7' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'}
                        />
                        <NumericKeys numerics={calculate} text='8' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='9' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <OperatorKeys text='*' operate={calculate} Icon={<Entypo name="cross" size={33} color="#EB6363" />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 0 }}>
                        <NumericKeys numerics={calculate} text='5' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='4' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='6' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <OperatorKeys text='-' operate={calculate} Icon={<Icon name="minus" size={23} color="#EB6363" />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 0 }}>
                        <NumericKeys numerics={calculate} text='1' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='2' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='3' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <OperatorKeys text='+' operate={calculate} Icon={<Icon name="plus" size={23} color="#EB6363" />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 0 }}>
                        <OperatorKeys text='refresh' operate={calculate} Icon={<MaterialCommunityIcons name="refresh" size={30} color={light ? '#FFFFFF' : '#000000'} />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} text='0' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <NumericKeys numerics={calculate} operate={calculate} text='.' color={light ? '#FFFFFF' : '#000000'} backgroundColor={light ? 'black' : '#FFFFFF'} />
                        <OperatorKeys text='=' operate={calculate} Icon={<Icon name="equals" size={23} color="#EB6363" />} backgroundColor={light ? 'black' : '#FFFFFF'} />
                    </View>

                </View>
            </View >
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})





