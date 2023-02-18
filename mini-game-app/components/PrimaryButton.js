import { Pressable, StyleSheet, Text, View } from "react-native";
import { IS_IOS } from "../utils/contants";


const PrimaryButton = ({ onPress, children }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={[styles.innerContainer, IS_IOS && styles.pressed]}
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: '#FFF',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,

  },
});

export default PrimaryButton;
