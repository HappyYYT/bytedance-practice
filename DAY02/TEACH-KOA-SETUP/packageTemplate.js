import ejs from "ejs";
import fs from "fs";

export function createPackageTemple(config) {
  const template = fs.readFileSync("./template/package.ejs", "utf-8");

  const code = ejs.render(template, {
    packageName: config.packageName,
    router: config.middleware.router,
    static: config.middleware.static,
  });

  console.log(code);

  return code;
}
