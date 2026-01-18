import { parseArgs } from "util";
import { createDocx } from "./docx";
import { createPdf } from "./pdf";


const { values: args } = parseArgs({
  options: {
    filename: {
      type: 'string',
    }
  }
});

const filename = args.filename || 'resume_andy_young';

createPdf(filename);
createDocx(filename);