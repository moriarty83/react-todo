import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Task from './Components/Task';


export default function App() {

  const [task, setTask ] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = ()=>{
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    console.log(taskItems)
    console.log(typeof(taskItems))
  }

  const completeTask = (index) =>{
    console.log("complete task: " + index)

    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    console.log(itemsCopy)
    setTaskItems(itemsCopy)
  }
  

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((task, index)=>{
              return <Task key={index} text={task} completeTask={completeTask} index={index}/>
            }

            )
          }

        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}><TextInput value={task} style={styles.input} placeholder={'Write a Task'} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11ffff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  }, 
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#c0c0c0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
