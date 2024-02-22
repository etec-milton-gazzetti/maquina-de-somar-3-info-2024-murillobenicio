import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default function App() {
  const htmlContent = '<i>Desenvolvimento para Dispositiveis Moveis II</i>';
  return (
    <View style={styles.container}>
      <Text>3º Info - 2024</Text>
      <Text style={{fontWeight: "bold"}}>Etec Professor Milton Gazzetti</Text>
      <Text style={{fontStyle: 'italic'}}>Desenvolvimento para Dispositiveis Moveis II</Text>
      <HTMLView
     value={htmlContent}
   />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
