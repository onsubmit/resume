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

class HtmlCreator {
  private _lines: Array<string> = [];

  createHeading(level: 1 | 2 | 3 | 4 | 5 | 6, text: string): this {
    const tagName = `h${level}`;
    this._lines.push(this.makeTag(tagName, text));
    this._lines.push("");
    return this;
  }

  createMultilineComment(lines: Array<string>): this {
    this._lines.push(...["<!--", ...lines, "-->", ""]);
    return this;
  }

  createLine(line: string): this {
    this._lines.push(this.makeTag("p", line));
    this._lines.push("");
    return this;
  }

  createBullets(bullets: Array<string>): this {
    this._lines.push("<ul>");
    this._lines.push(...bullets.map((bullet) => `  ${this.makeTag("li", bullet)}`));
    this._lines.push("</ul>");
    this._lines.push("");
    return this;
  }

  makeTag(tagName: string, innerHtml: string): string {
    return `<${tagName}>${innerHtml}</${tagName}>`;
  }

  makeHyperlink(hyperlink: Hyperlink): string {
    return `<a href="${hyperlink.url}" target="_blank">${hyperlink.contents}</a>`;
  }

  toString(): string {
    return this._lines.join("\n");
  }
}

export function createHtml(filenameNoExt: string): void {
  const html = new HtmlCreator();

  html.createMultilineComment([
    "<html> and <body> element intentionally omitted.",
    "This html is imported dynamically at runtime by https://anerdguy.now/#/resume.html",
  ]);

  html.createHeading(1, header.name);
  html.createLine(html.makeHyperlink(new Hyperlink(header.email, `mailto:${header.email}`)));
  html.createLine(summary);

  html.createHeading(2, "Experience");
  for (const { company, date, details, position } of experience) {
    html.createHeading(3, `${company} | ${position} (${date})`);
    html.createBullets(details.map((detail) => detail.withHtmlLinks()));
  }

  html.createHeading(2, "Education").createBullets(Object.values(education));
  html
    .createHeading(2, "Skills")
    .createBullets([
      currentSkills.join(", "),
      `AI tools: ${aiTools.join(", ")}`,
      `Also experienced with: ${olderSkills.join(", ")}`,
    ]);

  html.createHeading(2, "Interests").createLine(interests);

  html.createHeading(2, "Links").createBullets([...links.map((link) => html.makeHyperlink(link))]);

  html
    .createHeading(2, "Note")
    .createLine(
      `This README auto-generated with commit: ${html.makeHyperlink(
        new Hyperlink(hash, `https://github.com/onsubmit/resume/commit/${hash}`)
      )}`
    );

  writeFileSync(`${filenameNoExt}.html`, html.toString());
}
