import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ goal, onDeleteItem }) => {
  const onPressGoal = () => onDeleteItem(goal.id);

  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onPressGoal}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: '#FFF',
    padding: 8,
  }
});


export default GoalItem;
