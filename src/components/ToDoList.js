import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ToDoList(props) {
  return (
    <View>
      <TouchableOpacity
        testID="button"
        onLongPress={() => props.longClick(props.item.id)}
        style={[styles.button, {opacity: props.item.isDone ? 0.5 : 1}]}
        onPress={() => props.onClick(props.item.id)}>
        <Text style={styles.text}>{props.item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a4161a',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
export {ToDoList};
