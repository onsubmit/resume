import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';

import { ReactElement } from 'react';
import { Item, List } from './list';
import { Title } from './title';

const styles = StyleSheet.create({
  container: {
    flex: '0 0 auto',
    gap: 5,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
    marginBottom: 5,
  },
});

type Experience = { company: string; date: string; position: string, details: Array<`${string}.` | ReactElement> }

const ExperienceEntry = ({ company, details, position, date }: Experience) => {
  const title = `${company} | ${position}`;
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={company + i}>{detail}</Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: 'Salesforce',
    position: 'Principal Member of Technical Staff',
    date: 'Jan 2021—Present',
    details: [
      <Text>Tech lead for <Link href="https://github.com/tableau/tableau-mcp">Tableau MCP Server</Link> and <Link href="https://www.tableau.com/products/embedded-analytics">Embedded Analytics</Link>.</Text>,
      <Text>Shipped <Link href="https://www.tableau.com/developer/tools/embedding-api">Tableau Embedding API</Link>, <Link href="https://developer.salesforce.com/tools/tableau/embedding-playground">Embedding Playground</Link>, <Link href="https://www.tableau.com/products/tableau-pulse">Pulse</Link>, and <Link href="https://www.tableau.com/blog/vizql-data-service-use-your-data-your-way">VizQL Data Service</Link>.</Text>,
    ],
  },
  {
    company: 'Microsoft',
    date: '2014—2021',
    position: 'Senior Software Engineer',
    details: [
      <Text>Served 1B+ monthly active users by creating secure, reliable identity experiences for <Link href="https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra">Entra ID</Link> and Microsoft Account.</Text>,
      'Built infrastructure supporting UX engineering teams: shared repositories, tooling, and CI/CD pipelines.',
      'Established coding standards and mentored engineers across Identity teams.',
      'Primary on-call engineer for Authn/Authz services; validated deployments and mitigated incidents 24/7.',
      'Domain expert for UI test automation.'
    ],
  },
  {
    company: 'Microsoft',
    date: '2007—2014',
    position: 'Software Design Engineer in Test (SDET 2)',
    details: [
      'Developed comprehensive test specifications covering manual, automated, performance, and security testing.',
      'Built MSA Toolkit and Pool of Accounts service, improving test efficiency across Microsoft teams.',
      "Contributed to Kahuna Automation Framework (KAF), Microsoft's internal UI test automation framework.",
    ],
  },
] satisfies Array<Experience>;

export const Experience = () => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);