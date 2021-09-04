import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

function MainScreen(props) {

const counter = useSelector(state => state.count.counter)


    return (
        <View style={styles.Container}>
            {/* <Text>Main</Text> */}
            <TouchableOpacity style={styles.BtnContainer} onPress={()=>props.navigation.navigate('Counter')}><Text style={styles.BtnText}>Counter {counter}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.BtnContainer} onPress={()=>props.navigation.navigate('Api')}><Text style={styles.BtnText}>Api Screen</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'dodgerblue',
        justifyContent:'center',
        alignItems:'center'
      },
      BtnContainer:{
          marginTop:14,
          marginBottom:14
      },
      BtnText:{
          color:'white',
          fontSize:22
      }
})

export default MainScreen;