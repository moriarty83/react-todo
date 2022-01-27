import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Task = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={()=>{props.completeTask(props.index)}}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    itemText: {
        maxWidth: '80%',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#10a302',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 16,
        height: 16,
        borderWidth: 3,
        borderColor: '#55bcf6',
        borderRadius: 8,
    }
});

export default Task