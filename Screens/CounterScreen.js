import React, { useState } from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, decrementBy, increment, incrementBy } from '../redux/counter/counterSlice';



function CounterScreen(props) {

const counter = useSelector(state => state.count.counter)
const dispatch = useDispatch()


    return (
        <View style={styles.container}>
            <View style={styles.LabelContainer}>

            <Text>Counter - {counter}</Text>
            </View>
            <View style={styles.BtnContainer}>

            <TouchableOpacity style={styles.Btn} onPress={()=>dispatch(decrement())}><Text style={styles.BtnText} >-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Btn} onPress={()=>dispatch(increment())}><Text style={styles.BtnText} >+</Text></TouchableOpacity>
            </View>
            <View style={styles.BtnContainer}>

            <TouchableOpacity style={styles.Btn} onPress={()=>dispatch(decrementBy(2))}><Text style={styles.BtnText} >-2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Btn} onPress={()=>dispatch(incrementBy(2))}><Text style={styles.BtnText} >+2</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'dodgerblue',
        justifyContent:'center',
        alignItems:'center'
      },
      LabelContainer:{
        //   flex:2,
margin:44
      },
      BtnContainer:{
        //   flex:3,
          width:'100%',
          flexDirection:'row',
        //   backgroundColor:'red',
          justifyContent:'space-evenly',
alignItems:'center'          
      },
      Btn:{
          marginTop:12,
backgroundColor:'dodgerblue',
paddingHorizontal:20,
paddingVertical:8,
justifyContent:'center',
alignItems:'center'

      },
      BtnText:{
          fontSize:22,
          color:'white'
      }
})

export default CounterScreen;