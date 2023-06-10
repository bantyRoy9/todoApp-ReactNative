import react, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [goalItem,setGoalItem] = useState([]);
  const setGoalInput = goalTitle =>{
    setGoalItem(currentGoalInput=> [...currentGoalInput,{id: Math.random().toString(), value:goalTitle }]);
    console.log(goalItem)
  }
  return (
    <SafeAreaView style={styles.container}>
      <GoalInput setGoalInput={setGoalInput}/>
      
      <FlatList keyExtractor={ (items) =>items.id} data={goalItem} renderItem={(items)=> <GoalItem title={items.item.value} /> }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding:18  ,
    margin:18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
