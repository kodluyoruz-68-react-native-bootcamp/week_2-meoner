import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.todoTextStyle}>TODO</Text>
      <Text style={styles.counterTextStyle}>{props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  todoTextStyle: {
    fontSize: 50,
    color: '#e63946',
    fontWeight: '700',
  },
  counterTextStyle: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
export {Header};
