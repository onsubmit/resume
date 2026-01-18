import { parseArgs } from "util";
import { createDocx } from "./docx";
import { createMarkdown } from "./md";
import { createPdf } from "./pdf";


const { values: args } = parseArgs({
  options: {
    filename: {
      type: 'string',
    }
  }
});

const filename = args.filename;

createPdf(filename || 'resume_andy_young');
createDocx(filename || 'resume_andy_young');
createMarkdown(filename || 'README');