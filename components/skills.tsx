import { View } from '@react-pdf/renderer';

import { aiTools, currentSkills, olderSkills } from '../data/skills';
import { Item, List } from './list';
import { Title } from './title';



export const Skills = () => (
  <View>
    <Title>Skills</Title>
    <List>
      <Item>{currentSkills.join(', ')}</Item>
      <Item>AI Tools: {aiTools.join(', ')}</Item>
      <Item>Also experienced with: {olderSkills.join(', ')}</Item>
    </List>

  </View>
);