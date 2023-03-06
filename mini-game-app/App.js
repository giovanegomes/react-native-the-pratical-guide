import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import StartGame from './screens/StartGame';

const GRADIENT_COLORS = ['#4e0329', '#ddb52f'];

export default function App() {
  return (
    <LinearGradient colors={GRADIENT_COLORS} style={styles.container} >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.imageStyle}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  }
});
