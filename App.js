import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const PlaceholderImage = require('./assets/images/berlin.jpg');





export default function App() {
  
  
  [colorIndex, setColorIndex] = useState(0)

  const swbgcolor=['red','yellow','gray']

  const changeSWbgColor = () => {
    if (colorIndex >= 2) {
      setColorIndex(0)
      return
    }
    setColorIndex(++colorIndex)
  }
   
  return (
    <View style={[styles.boxOfElements,{backgroundColor: swbgcolor[colorIndex]}]}>
    
    <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
    </View>

    <Button onPress={changeSWbgColor} title="Click Me" color="#841584" />
 
    <Text style={{ color: 'blue' }}>Svanten text</Text>
      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  boxOfElements: {
    flex: 1,
    backgroundColor:'green',
    alignItems: 'center',
  },
  imrageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});





