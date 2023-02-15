import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ goalAddHandler, isVisible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

  const onAddGoal = () => {
    goalAddHandler(enteredGoalText);
    setEnteredGoalText('');
  };

  const onCancelAdding = () => {
    setEnteredGoalText('');
    onCancel();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/img/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancelAdding} color="#f31283" />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoal} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});


export default GoalInput;
