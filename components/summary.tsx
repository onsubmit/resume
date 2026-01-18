import { StyleSheet, Text } from '@react-pdf/renderer';
import { summary } from '../data/summary';

const styles = StyleSheet.create({
  summary: {
    fontFamily: 'Lato',
    fontSize: 11,
    marginBottom: 10,
  },
});

export const Summary = () => <Text style={styles.summary}>{summary}</Text>;