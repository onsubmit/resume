import { execSync } from "child_process";

export const hash = execSync("git rev-parse --short HEAD").toString().trim();
