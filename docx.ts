import {
  AlignmentType,
  convertInchesToTwip,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  IRunOptions,
  LevelFormat,
  Packer,
  Paragraph,
  ParagraphChild,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";
import { writeFileSync } from "fs";
import { education } from "./data/education";
import { experience } from "./data/experience";
import { header } from "./data/header";
import { interests } from "./data/interests";
import { links } from "./data/links";
import { aiTools, currentSkills, olderSkills } from "./data/skills";
import { summary } from "./data/summary";
import { hash } from "./utils/hash";

class DocumentCreator {
  create(): Document {
    const document = new Document({
      creator: "Andy Young",
      title: "Andy Young: Resume",
      description: `Git commit hash: ${hash}`,
      styles: {
        default: {
          heading1: {
            run: {
              size: 28,
              bold: true,
            },
            paragraph: {
              spacing: {
                before: 240,
              },
            },
          },
          document: {
            run: {
              size: "11pt",
              font: "Aptos",
            },
          },
        },
        paragraphStyles: [
          {
            id: "wellSpaced",
            name: "Well Spaced",
            basedOn: "Normal",
            paragraph: {
              spacing: { line: 242, before: 11, after: 11 },
            },
          },
        ],
      },
      numbering: {
        config: [
          {
            reference: "my-bullet",
            levels: [
              {
                level: 0,
                format: LevelFormat.BULLET,
                text: "\u2043",
                alignment: AlignmentType.LEFT,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0.25),
                      hanging: convertInchesToTwip(0.125),
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      sections: [
        {
          children: [
            new Paragraph({
              tabStops: [
                {
                  type: TabStopType.RIGHT,
                  position: TabStopPosition.MAX,
                },
              ],
              children: [
                this.createTextRun({
                  text: header.name,
                  size: "24pt",
                }),
                this.createTextRun({
                  children: [
                    new Tab(),
                    new Paragraph({
                      children: [
                        new ExternalHyperlink({
                          children: [
                            this.createTextRun({
                              text: header.email,
                              style: "Hyperlink",
                            }),
                          ],
                          link: `mailto:${header.email}`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            new Paragraph({ children: [this.createTextRun(summary)] }),
            this.createHeading("Experience"),
            ...experience
              .map((e) => {
                const arr: Paragraph[] = [];

                arr.push(
                  new Paragraph({
                    style: "wellSpaced",
                    tabStops: [
                      {
                        type: TabStopType.RIGHT,
                        position: TabStopPosition.MAX,
                      },
                    ],
                    children: [
                      this.createTextRun({
                        text: `${e.company} | ${e.position}`,
                        bold: true,
                      }),
                      this.createTextRun({
                        children: [new Tab(), e.date],
                        bold: true,
                      }),
                    ],
                  })
                );

                e.details.forEach((sb) => {
                  arr.push(
                    sb.withDocxLinks({
                      paragraph: {
                        style: "wellSpaced",
                        numbering: {
                          reference: "my-bullet",
                          level: 0,
                        },
                      },
                      textRun: { font: "Aptos" },
                    })
                  );
                });

                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            this.createHeading("Education"),
            ...Object.entries(education)
              .map(([_, value]) => {
                return this.createBullet(value);
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            this.createHeading("Skills"),
            ...[
              this.createBullet(currentSkills.join(", ")),
              this.createBullet(`AI tools: ${aiTools.join(", ")}`),
              this.createBullet(`Also experienced with: ${olderSkills.join(", ")}`),
            ],
            this.createHeading("Interests"),
            new Paragraph({
              style: "wellSpaced",
              children: [this.createTextRun(interests)],
            }),
            this.createHeading("Links"),
            ...links.map((link) =>
              this.createBullet(
                new ExternalHyperlink({
                  children: [
                    this.createTextRun({
                      text: link.contents,
                      style: "Hyperlink",
                    }),
                  ],
                  link: link.url.toString(),
                })
              )
            ),
          ],
        },
      ],
    });

    return document;
  }

  createTextRun(options: IRunOptions | string): TextRun {
    if (typeof options === "string") {
      return new TextRun({
        text: options,
        font: "Aptos",
      });
    }

    return new TextRun({
      ...options,
      font: "Aptos",
    });
  }

  createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
    });
  }

  createBullet(child: string | ParagraphChild): Paragraph {
    return new Paragraph({
      style: "wellSpaced",
      numbering: {
        reference: "my-bullet",
        level: 0,
      },
      children: [typeof child === "string" ? this.createTextRun(child) : child],
    });
  }
}

export async function createDocx(filenameNoExt: string) {
  const documentCreator = new DocumentCreator();
  const doc = documentCreator.create();

  const buffer = await Packer.toBuffer(doc);
  writeFileSync(`${filenameNoExt}.docx`, buffer);
}
