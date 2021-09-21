#!/usr/bin/env node
console.log("hello cli ...");
const program = require("commander");
// 策略模式
program.version(require("../package").version);
program
  .command("init <name>")
  .description("init project")
  .action(require("../lib/init"));
program
  .command("refresh")
  .description("refresh routers...")
  .action(require("../lib/refresh"));
program.parse(process.argv);
console.log(process.argv);
// [
//   'D:\\nodejs\\node.exe',
//   'C:\\Users\\10237\\AppData\\Roaming\\npm\\node_modules\\02_vue-auto-router-cli\\bin\\kkb.js'
// ]

// 在控制台输入指令 kkb -V
// 在控制台输入执行 kkb init abc
