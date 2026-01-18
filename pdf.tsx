import { Document, Page, PageProps, StyleSheet, View, render } from '@react-pdf/renderer';

import { hash } from 'crypto';
import { Education } from './components/education';
import { Experience } from './components/experience';
import { Header } from './components/header';
import { Interests } from './components/interests';
import { Links } from './components/links';
import { Skills } from './components/skills';
import { Summary } from './components/summary';
import { setupFonts } from './fonts';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
});

setupFonts();

const Resume = (props: PageProps) => (
  <Page {...props} style={styles.page}>
    <View style={styles.container}>
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Links />
    </View>
  </Page>
);

const ResumeDocument = () => (
  <Document
    author="Andy Young"
    subject={`Git commit hash: ${hash}`}
    title="Andy Young: Resume"
    keywords="andy young resume software engineer"
    creationDate={new Date('2026-01-17T18:49:10.913Z')}
    modificationDate={new Date()}
    pageLayout="singlePage"
  >
    <Resume size="A4" />
  </Document>
);

export function createPdf(filenameNoExt: string) {
  render(<ResumeDocument />, `${__dirname}/${filenameNoExt}.pdf`);
}