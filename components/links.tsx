import { Link, View } from '@react-pdf/renderer';

import { Item, List } from './list';
import { Title } from './title';

export const Links = () => (
  <View>
    <Title>Links</Title>
    <List>
      <Item><Link href="https://github.com/onsubmit">https://github.com/onsubmit</Link></Item>
      <Item><Link href="https://www.linkedin.com/in/anerdguynow">https://www.linkedin.com/in/anerdguynow</Link></Item>
    </List>

  </View>
);