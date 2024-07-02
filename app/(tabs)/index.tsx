import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style = {styles.position}>
 
      <ThemedView style={styles.container}>   
        <Image style = {styles.myPicture} source={require('@/assets/images/luis-rodas-picture.png')} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Luis Rodas</ThemedText>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Full Stack Developer</ThemedText>
        <ThemedText>
          Bio
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer} style = {styles.about}>
       <ThemedText>One of my many passions is drawing. I love to draw and I 
        draw as a way to relax or to think. I mainly know how to draw tanks, military aircraft, 
        and some military helicopter, although, I am wanting to learn how to draw people
        The role I was given for SCLA is the Developer role. My dream career is to be an airline pilot
        </ThemedText> 
       </ThemedView>
       <ThemedView>
        <ThemedText>

        </ThemedText>
        <ThemedView>
          <ThemedText style={styles.blank}>Whats up</ThemedText>
        </ThemedView>
       </ThemedView>
       </ThemedView>
       </ThemedView>
 
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    top: 10,
    margin: 0,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',

  },
  stepContainer: {
    flexDirection: 'column',
    width: 200,
    padding: 0,
    margin: 0,
    gap: 8,
    alignItems: 'center',

  },
  myPicture: {
    height: 300,
    width: 270,
    alignItems: 'center',
  },
  position: {
    padding: 20,
    position: 'relative',
    top: 0,


  },
  about: {
    borderRadius: 20,
    margin: 15,
    padding: 20,
    backgroundColor: '#1282A2',
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    top: 30,
  },
  blank: {
    height: 130,
  },
});
