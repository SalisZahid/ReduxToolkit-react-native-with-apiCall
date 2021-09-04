import React, { useEffect } from 'react';
import { Text, View,StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/posts/postSlice';


function ApiScreen(props) {

const dispatch = useDispatch()
const {status,list} = useSelector(state => state.post)



const Item = ({ title,body,id }) => (
    <View style={styles.item}>
      <Text style={styles.title}>ID : {id}</Text>
      <Text style={styles.title}>Title : {title}</Text>
      <Text style={styles.title}>Body : {body}</Text>
    </View>
  );
const renderItem = ({ item }) => (
    <Item title={item.title} body={item.body} id={item.id} />
  );

    return (
        <View style={styles.container}>
            {/* <Text>Api</Text> */}
            <TouchableOpacity onPress={()=>dispatch(getPosts({limit:5}))}>
            <Text>ApiCall</Text>
            </TouchableOpacity>
{status=='loading'?<Text>Loading...</Text>: <FlatList data={list} renderItem={renderItem}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'dodgerblue',
        // justifyContent:'center',
        alignItems:'center'
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})

export default ApiScreen;