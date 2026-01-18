import { Hyperlink } from "../utils/hyperlink";
import { StringBuilder } from "../utils/stringBuilder";

export type Experience = {
  company: string;
  date: string;
  position: string;
  details: Array<StringBuilder>;
};

const salesforce: Experience = {
  company: "Salesforce",
  position: "Principal Member of Technical Staff",
  date: "Jan 2021—Present",
  details: [
    new StringBuilder([
      "Tech lead for ",
      new Hyperlink("Tableau MCP Server", "https://github.com/tableau/tableau-mcp"),
      " and ",
      new Hyperlink("Embedded Analytics", "https://www.tableau.com/products/embedded-analytics"),
      ".",
    ]),
    new StringBuilder([
      "Shipped ",
      new Hyperlink(
        "Tableau Embedding API",
        "https://www.tableau.com/developer/tools/embedding-api"
      ),
      ", ",
      new Hyperlink(
        "Embedding Playground",
        "https://developer.salesforce.com/tools/tableau/embedding-playground"
      ),
      ", ",
      new Hyperlink("Pulse", "https://developer.salesforce.com/tools/tableau/embedding-playground"),
      ", and ",
      new Hyperlink(
        "VizQL Data Service",
        "https://www.tableau.com/blog/vizql-data-service-use-your-data-your-way"
      ),
      ".",
    ]),
  ],
};

const microsoftSde: Experience = {
  company: "Microsoft",
  date: "2014—2021",
  position: "Senior Software Engineer",
  details: [
    new StringBuilder([
      "Served 1B+ monthly active users by creating secure, reliable identity experiences for ",
      new Hyperlink(
        "Entra ID",
        "https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra"
      ),
      " and Microsoft Account.",
    ]),
    ...StringBuilder.fromStrings([
      "Built infrastructure supporting UX engineering teams: shared repositories, tooling, and CI/CD pipelines.",
      "Established coding standards and mentored engineers across Identity teams.",
      "Primary on-call engineer for Authn/Authz services; validated deployments and mitigated incidents 24/7.",
      "Domain expert for UI test automation.",
    ]),
  ],
};

const microsoftSdet: Experience = {
  company: "Microsoft",
  date: "2007—2014",
  position: "Software Design Engineer in Test (SDET 2)",
  details: StringBuilder.fromStrings([
    "Developed comprehensive test specifications covering manual, automated, performance, and security testing.",
    "Built MSA Toolkit and Pool of Accounts service, improving test efficiency across Microsoft teams.",
    "Contributed to Kahuna Automation Framework (KAF), Microsoft's internal UI test automation framework.",
  ]),
};

export const experience = [salesforce, microsoftSde, microsoftSdet];
