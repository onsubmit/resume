import { StyleSheet, View } from '@react-pdf/renderer';

import { education } from '../data/education';
import { Item, List } from './list';
import { Title } from './title';

const styles = StyleSheet.create({
  education: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

export const Education = () => (
  <View>
    <Title>Education</Title>
    <List>
      {Object.entries(education).map(([key, value]) => (<Item key={key}>{value}</Item>))}
    </List>
  </View>
);