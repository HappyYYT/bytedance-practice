// 读文件列表

// 拼代码 模板渲染的方式
const fs = require("fs");
const handlebars = require("handlebars");
const chalk = require("chalk");
module.exports = async () => {
  // 同步读取文件夹获取列表
  const list = fs
    .readdirSync("./src/views")
    .filter((v) => v !== "Home.vue")
    .map((v) => ({
      //   name: v.replace('.vue', '').toLocaleLowerCase(),
      // 我想区分大小写
      name: v.replace(".vue", ""),
      file: v,
    }));

  // 生成路由定义
  compile({ list }, "./src/router.js", "./template/router.js.hbs");
  // 生成菜单
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs");

  // /+**就能自动打出来这个格式的注释
  /**
   *
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板
   */
  function compile(meta, filePath, templatePath) {
    // 先判断一下模板是否存在
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`👌 ${filePath} 创建成功`));
    }
  }
};
