const fs = require("fs");
// 异步IO
// fs.readFile
// 同步读取
const data = fs.readFileSync(__dirname + "/conf.js");
// 读的是二进制文件 应用场景是图片和视频的读取
// data <Buffer 63 6f 6e 73 74 20 73 61 79 69 6e 67 20 3d 20 22 42 79 74 65 44 61 6e 63 65 20 59 59 44 53 21 22 3b>
console.log("data", data);
// 如果想看文本的话用toString方法
// 默认转换模式是UTF-8
// readFileSync data const saying = "ByteDance YYDS!";
console.log("readFileSync data", data.toString());

fs.readFile(__dirname + "/conf.js", (err, data) => {
  // 错误优先的回调
  if (err) throw err;
  // readFile data const saying = "ByteDance YYDS!";
  console.log("readFile data", data.toString());
});

// promise api async/await
// promise风格的除了在const fs = require("fs")后追加.promises
// 变成const fs = require("fs").promises
// 还可以：
(async () => {
  const fs = require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile(__dirname + "/conf.js");
  // readFile data const saying = "ByteDance YYDS!";
  console.log("promisify data", data.toString());
})();


