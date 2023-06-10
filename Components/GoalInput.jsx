import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

const GoalInput = (props) => {
  const [goalText,setGoalText] = useState('')
  const changeHandler = (e) =>{
    setGoalText(e)
  }
  return (
    <TouchableOpacity>
       <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput} 
          placeholder='Add list'
          onChangeText={changeHandler}
          />
        {/* <Button title='Add' onPress={()=>props.setGoalInput(goalText)}/> */}
        <Button title='Add' onPress={props.setGoalInput.bind(this,goalText)}/>
      </View>
      </TouchableOpacity>

  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputSection:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'center'
  },
  textInput:{
    borderWidth:1,
    flex:1
  }
})