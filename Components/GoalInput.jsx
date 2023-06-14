import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react'

const GoalInput = (props) => {
  const [goalText, setGoalText] = useState('')
  const changeHandler = (e) => {
    setGoalText(e)
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput}
          placeholder='Add list'
          onChangeText={changeHandler}
        />
        <View style={styles.goalInputBtn}>
          <Button title='Cancel' color={'red'} onPress={() => props.closeModal()} />
          <Button title='Add' onPress={props.setGoalInput.bind(this, goalText)} />
        </View>
      </View>
    </Modal>

  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#3d3d3d',
    // paddingHorizontal: 5,
    width: '80%',
    padding: 10
  },
  goalInputBtn:{
    flexDirection:'row',
    gap:10
  }
})