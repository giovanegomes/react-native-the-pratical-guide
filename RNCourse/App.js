import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const keyExtractor = ({ id }) => id;

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => setModalIsVisible(true);
  const endAddGoalHandler = () => setModalIsVisible(false);

  const goalAddHandler = (enteredGoalText) => {
    if (!enteredGoalText) return;

    setGoalsList((current) => [
      ...current,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((current) =>
      current.filter((goal) => goal.id !== id)
    );
  };

  const renderItem = ({ item }) => (
    <GoalItem goal={item} onDeleteItem={deleteGoalHandler} />
  );

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          isVisible={modalIsVisible}
          goalAddHandler={goalAddHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
