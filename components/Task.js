import React from "react";
import { Text, View,StyleSheet, TouchableOpacity } from "react-native";
const Task = (props) =>{

     
return(
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
        <Text style={styles.itemText} >{props.task}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
)
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,

        
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'

    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#009f92',
        opacity:0.4,
        borderRadius:5,
        marginRight:15

    },
    itemText:{
        maxWidth:'80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#009f92',
        borderWidth:2,
        borderRadius:5,

    },
})
export default Task;
