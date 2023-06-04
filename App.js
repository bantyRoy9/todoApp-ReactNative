import react, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.textInput} 
          placeholder='Add list'
          />
        <Button title='Add'/>
      </View>
      <View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection:{
    flexDirection:'row',
    justifyContent:'center'
  },
  textInput:{
    padding:10,
    borderWidth:1,
    
    flex:1
  }
});
