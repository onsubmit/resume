# Resume: Andy Young

A dynamically generated PDF resume built with React and [@react-pdf/renderer](https://react-pdf.org/).

The latest version of my resume is always available at https://github.com/onsubmit/resume/blob/main/resume_andy_young.pdf

## Overview

Rather than maintaining a PDF or Word document, this project generates my professional resume as a PDF using React components. This means updating my resume is as simple as making a code change.

## Local Development

```bash
npm run dev
```

This will generate `./dev_resume_andy_young.pdf`. Any changes to source files will automatically rebuild the PDF.

## Automated Builds

This repository uses GitHub Actions to automatically regenerate the PDF whenever changes are pushed to the `main` branch.

The workflow:

1. Triggers on push to `main`
2. Installs dependencies
3. Runs the PDF build script
4. Commits the updated `resume_andy_young.pdf` back to the repository

See [`.github/workflows/generate-pdf.yml`](https://github.com/onsubmit/resume/blob/main/.github/workflows/generate-pdf.yml) for the full workflow configuration.
