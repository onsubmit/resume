import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  summary: {
    fontFamily: 'Lato',
    fontSize: 11,
    marginBottom: 10,
  },
});

export const Summary = () => <Text style={styles.summary}>Principal software engineer with 20 years experience delivering secure, scalable applications serving billions of users. Strong background in technical leadership, full-stack development, embedded analytics, and software testing principles.</Text>;