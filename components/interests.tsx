import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { interests } from '../data/interests';
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
    <Text style={styles.interests}>{interests}</Text>
  </View>
);