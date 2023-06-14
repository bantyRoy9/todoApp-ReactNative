import react, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [goalItem,setGoalItem] = useState([]);
  const [isVisible,setIsVisible] = useState(false);
  const setGoalInput = goalTitle =>{
    setGoalItem(currentGoalInput=> [...currentGoalInput,{id: Math.random().toString(), value:goalTitle }]);
    setIsVisible(false);
  }

  const removeItem = id =>{
    setGoalItem(currentGoalInput=> {
      return currentGoalInput.filter((el)=>el.id !== id)
    })
  }
  const closeModal =()=>{
    setIsVisible(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Add Goal' onPress={()=>setIsVisible(true)}/>
      <GoalInput setGoalInput={setGoalInput} visible={isVisible} closeModal={closeModal} color="red"/>
      <FlatList keyExtractor={ (items) =>items.id} data={goalItem} renderItem={(items)=> <GoalItem id={items.item.id} onDeleteItem={removeItem} title={items.item.value} /> }/>
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
  }
});
