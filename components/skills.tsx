import { View } from '@react-pdf/renderer';

import { Item, List } from './list';
import { Title } from './title';

const currentSkills: Array<string> = [
  'TypeScript', 'JavaScript', 'Node.JS', 'Express', 'MCP', 'React', 'Redux', 'RTK Query', 'Debugging', 'Vite and Vitest', 'Playwright', 'Puppeteer', 'Cypress', 'Git', 'GitHub', 'Gitlab', 'PowerShell'
];

const aiTools: Array<string> = [
  'Cursor', 'Claude Desktop', 'ChatGPT (Apps)', 'Building agents and MCP clients with OpenAI'
];

const olderSkills: Array<string> = [
  'C#', '.NET', 'ASP.NET', 'SQL', 'Selenium WebDriver', 'Azure Portal', 'Azure DevOps'
];

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