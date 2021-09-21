// 只要在配置文件里设置了type: module就可以在js文件里使用esm规范
import fs from "fs";
import { createIndexTemple } from "./indexTemplate.js";

// input
// process
// output

// 程序的input
// input
// cli -> gui
const inputConfig = {
    middleware: {
        router: true,
    }
}

// 问题驱动
// 核心：自动化思维
// 1.创建了文件夹(项目名)
fs.mkdirSync(getRootPath());
// 2.创建了index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemple(inputConfig));
// 3.创建了package.json
// 练习点：基于数据生成package.json
fs.writeFileSync(getRootPath() + "/package.json", "package");
// 4.安装依赖
// TODO package -> yarn

function getRootPath() {
  return "./haha";
}
