import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  // console.log(props.id)
  return (
    <TouchableOpacity onPress={props.onDeleteItem.bind(this,props.id)}>
    <View style={styles.itemsList}>
      <Text style={styles.itemsText}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    itemsList:{
        borderColor:'red',
        borderWidth:1,
        marginVertical:10,
        // width: ,
        backgroundColor:'grey',
        color:'white',
    },
    itemsText:{
      flex:1,
        padding:10,
        color:'white'
    }
})