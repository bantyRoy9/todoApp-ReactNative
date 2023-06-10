import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <View style={styles.itemsList}>
      <Text style={styles.itemsText}>{props.title}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    itemsList:{
        borderColor:'red',
        borderWidth:1,
        margin:10,
        width:'100%',
        backgroundColor:'grey',
        color:'white',
    },
    itemsText:{
        padding:10,
        color:'white'
    }
})