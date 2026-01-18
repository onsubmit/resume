export class Hyperlink {
  contents: string;
  url: URL;

  constructor(contents: string, url: string = contents) {
    this.contents = contents;
    this.url = new URL(url);
  }
}
