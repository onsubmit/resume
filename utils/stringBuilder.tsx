import { Link } from "@react-pdf/renderer";
import { ExternalHyperlink, IParagraphOptions, IRunOptions, Paragraph, ParagraphChild, TextRun } from "docx";
import { Hyperlink } from "./hyperlink";
import React = require("react");

type Entry = string | Hyperlink;

export class StringBuilder {
  private _entries: Array<Entry> = [];

  constructor(entries: Array<Entry> | Entry) {
    this._entries = Array.isArray(entries) ? entries : [entries];
  }

  static fromStrings(strings: Array<string>): Array<StringBuilder> {
    return strings.map((s) => new StringBuilder(s));
  }

  withPdfRendererLinks(): React.JSX.Element {
    return (
      <>
        {this._entries
          .map((entry, index) => {
            if (typeof entry === "string") {
              return <React.Fragment key={index}>{entry}</React.Fragment>;
            }

            return <Link key={index} href={entry.url.toString()}>{entry.contents}</Link>;
          })}
      </>
    );
  }

  withDocxLinks(options?: Partial<{ paragraph: IParagraphOptions; textRun: IRunOptions }>): Paragraph {
    const paragraphChildren: Array<ParagraphChild> = this._entries.map((entry) => {
      if (typeof entry === "string") {
        return new TextRun({
          ...options.textRun,
          text: entry,
        });
      }

      return new ExternalHyperlink({
        children: [
          new TextRun({
            ...options.textRun,
            text: entry.contents,
            style: "Hyperlink",
          }),
        ],
        link: entry.url.toString(),
      });
    });

    return new Paragraph({ children: paragraphChildren, ...options?.paragraph })
  }
}
