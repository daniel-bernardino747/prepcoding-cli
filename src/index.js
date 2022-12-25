import pkg from "fs-extra";
import inquirer from "inquirer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const { readdir } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const { login } = await inquirer.prompt([
    {
      type: "confirm",
      name: "login",
      message: "Want to login?",
      default: "yes",
    },
  ]);
  if (login) {
    console.log("is true");
  }
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Choose your template?",
      choices: await readdir(join(__dirname, "../src/templates")),
    },
  ]);
  console.log(template);
}
main();
