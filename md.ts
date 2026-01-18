import { writeFileSync } from "fs";
import { education } from "./data/education";
import { experience } from "./data/experience";
import { header } from "./data/header";
import { interests } from "./data/interests";
import { links } from "./data/links";
import { aiTools, currentSkills, olderSkills } from "./data/skills";
import { summary } from "./data/summary";
import { hash } from "./utils/hash";
import { Hyperlink } from "./utils/hyperlink";

class MarkdownCreator {
  private _lines: Array<string> = [];

  createHeading(level: 1 | 2 | 3 | 4 | 5 | 6, text: string): this {
    this._lines.push(...[`${"#".repeat(level)} ${text}`, ""]);
    return this;
  }

  createLine(line: string): this {
    this._lines.push(...[line, ""]);

    return this;
  }

  createBullets(bullets: Array<string>): this {
    this._lines.push(...bullets.map((bullet) => `- ${bullet}`));
    this._lines.push("");
    return this;
  }

  makeHyperlink(hyperlink: Hyperlink): string {
    return `[${hyperlink.contents}](${hyperlink.url})`;
  }

  toString(): string {
    return this._lines.join("\n");
  }
}

export function createMarkdown(filenameNoExt: string): void {
  const md = new MarkdownCreator();

  md.createHeading(1, header.name);
  md.createLine(md.makeHyperlink(new Hyperlink(header.email, `mailto:${header.email}`)));
  md.createLine(summary);

  md.createHeading(2, "Experience");
  for (const { company, date, details, position } of experience) {
    md.createHeading(3, `${company} | ${position} (${date})`);
    md.createBullets(details.map((detail) => detail.withMarkdownLinks()));
  }

  md.createHeading(2, "Education").createBullets(Object.values(education));
  md.createHeading(2, "Skills").createBullets([
    currentSkills.join(", "),
    `AI tools: ${aiTools.join(", ")}`,
    `Also experienced with: ${olderSkills.join(", ")}`,
  ]);

  md.createHeading(2, "Interests").createLine(interests);

  md.createHeading(2, "Links").createBullets([...links.map((link) => md.makeHyperlink(link))]);

  md.createHeading(2, "Note").createLine(
    `This README auto-generated with commit: ${md.makeHyperlink(
      new Hyperlink(hash, `https://github.com/onsubmit/resume/commit/${hash}`)
    )}`
  );

  writeFileSync(`${filenameNoExt}.md`, md.toString());
}
