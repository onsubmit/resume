import { StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    borderBottom: '1px solid black',
  },
});

export const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
