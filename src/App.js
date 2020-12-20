import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {Header, ToDoList, AddTodo} from './components';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todos, setTodos] = useState([]);

  const clickButton = (value) => {
    if(value !== ''){
      setTodos(() => {
        return [...todos, {title: value, isDone: false, id: Math.random()}];
      });
    }
  };

  const longClick = (id) => {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  const toogleToDO = (id) => {
    const index = todos.findIndex((u) => u.id === id);
    const newArray = [...todos];
    newArray[index].isDone = !newArray[index].isDone;
    setTodos(newArray);
  };

  const renderTodo = ({item}) => {
    return <ToDoList item={item} longClick={longClick} onClick={toogleToDO} />;
  };

  const counter = () => {
    const count = todos.filter((todo) => todo.isDone === false).length;
    return count;
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header count={counter()} />
        <FlatList
          testID="list"
          style={{flex: 1}}
          keyExtractor={(item, index) => item.id.toString()}
          data={todos}
          renderItem={renderTodo}
          ListEmptyComponent={<Text>Görev Eklenmedi.</Text>}
        />
      </View>
      <View>
        <AddTodo addTodoClick={clickButton} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
