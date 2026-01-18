import { Link, View } from "@react-pdf/renderer";

import { links } from "../data/links";
import { Item, List } from "./list";
import { Title } from "./title";

export const Links = () => (
  <View>
    <Title>Links</Title>
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link href={link.url.toString()}>
            {link.contents}
          </Link>
        </Item>
      ))}
    </List>
  </View>
);
