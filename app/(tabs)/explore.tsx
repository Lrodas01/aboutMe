import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contacts</ThemedText>
      </ThemedView>
        <ThemedText style={styles.reference}>You can find my projects here on:</ThemedText>
        <ExternalLink  style={styles.github} href='https://github.com/Lrodas01'>My Github Account</ExternalLink>
        <ThemedText style={styles.reference}>You can email me:</ThemedText>
        <ExternalLink  style={styles.email} href='mailto:lrodaroda23@gmail.com'>lrodaroda23@gmail.com</ExternalLink>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  github: {
    top: 30,
    fontSize: 30,
    width: 140,
  
  },
  email: {
    top: 30,
    fontSize: 30,
  
  },
  reference: {
    color: '#000000',
    top: 20,
    fontSize: 25,
    marginTop: 20,
  }
  
});
