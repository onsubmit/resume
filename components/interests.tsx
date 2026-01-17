import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { Title } from './title';

const styles = StyleSheet.create({
  interests: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

export const Interests = () => (
  <View>
    <Title>Interests</Title>
    <Text style={styles.interests}>Open-source projects, trombone (former Seattle Sounders FC band member), PC gaming, astronomy, husband, father to a 10-year-old son.</Text>
  </View>
);