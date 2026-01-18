# Resume: Andy Young

This repo dynamically generates and publishes my resume:

- In [PDF format](https://github.com/onsubmit/resume/blob/main/resume_andy_young.pdf) using [@react-pdf/renderer](https://react-pdf.org/).
- In [DOCX format](https://github.com/onsubmit/resume/blob/main/resume_andy_young.docx) using [docx](https://docx.js.org/).

## Overview

Rather than manually maintaining a PDF or Word document of my professional resume, this project generates them. This means updating my resume is as simple as making a code change.

## Local Development

```bash
npm run dev
```

This will generate `./dev_resume_andy_young.pdf` and `./dev_resume_andy_young.docx`. Any changes to source files will automatically rebuild the files. Please note that Microsoft Word locks the file so consider closing it before regenerting the DOCX.

## Automated Builds

This repository uses GitHub Actions to automatically regenerate the PDF and DOCX files whenever changes are pushed to the `main` branch.

The workflow:

1. Triggers on push to `main`
2. Installs dependencies
3. Runs the resume generation script
4. Commits the updated PDF and DOCX files back to the repository

See [`.github/workflows/generate-resumes.yml`](https://github.com/onsubmit/resume/blob/main/.github/workflows/generate-resumes.yml) for the full workflow configuration.
