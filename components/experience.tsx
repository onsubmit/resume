import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { Experience as ExperienceData, experience } from '../data/experience';
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

const ExperienceEntry = ({ company, details, position, date }: ExperienceData) => {
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
          <Item key={company + i}>{detail.withPdfRendererLinks()}</Item>
        ))}
      </List>
    </View>
  );
};

export const Experience = () => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experience.map(({ company, date, details, position }) => (
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