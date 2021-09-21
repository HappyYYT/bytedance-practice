// 打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear"); // 清屏
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");
const open = require("open");

const spawn = async (...args) => {
  // 同步 Promise API
  // 输出流 子进程合并到主进程
  const { spawn } = require("child_process");
  return new Promise((resolve, reject) => {
    // win10 兼容性问题处理
    const options = args[args.length - 1];
    if (process.platform === "win32") {
      options.shell = true;
    }
    const proc = spawn(...args);
    // 输出流 子进程 合并到 主进程
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      console.log("success");
      resolve();
    });
    proc.on("error", (e) => {
      reject(e);
    });
  }).catch((e) => {
    console.log("error:", e);
  });
};

module.exports = async (name) => {
  // 打印欢迎界面
  clear();
  const data = await figlet("KKB Welcome");
  log(data);

  // 项目模板
  log("🧩创建项目" + name);
  // await clone("github:su37josephxia/vue-template", name);

  // 下载依赖 npm i 或者npm install
  // 子进程
  log(`💗安装依赖....`);
  // log(process.execPath);
  log(`${__dirname}/${name}`);
  await spawn("npm", ["i"], { cwd: `${__dirname}/../${name}` });
  log(
    chalk.green(`
  👌安装完成！
  To get Start:
  =============================
   cd ${name}
   npm run serve
  =============================
  `)
  );
  open("http://localhost:8080");
  await spawn("npm", ["run", "serve"], { cwd: `${__dirname}/../${name}` });
};

// kkb init abc
