import { StyleSheet, View } from '@react-pdf/renderer';

import { Item, List } from './list';
import { Title } from './title';

const styles = StyleSheet.create({
  education: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

const entries: Record<string, string> = {
  wsu: 'B.S. Honors Computational Mathematics, Washington State University, 2004.',
  microsoft: 'Microsoft Test Apprentice Program, Microsoft Corporation, 2007.',
};

export const Education = () => (
  <View>
    <Title>Education</Title>
    <List>
      {Object.entries(entries).map(([key, value]) => (<Item key={key}>{value}</Item>))}
    </List>
  </View>
);