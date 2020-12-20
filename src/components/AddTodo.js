import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function AddTodo(props) {
  const [value, setValue] = useState('');

  const pressButton = () => {
    props.addTodoClick(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="input"
        style={styles.textInput}
        value={value}
        placeholder="Type something to do.."
        onChangeText={(value) => setValue(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={pressButton}
        testID="button">
        <Text style={styles.text}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#adb5bd',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
export {AddTodo};
