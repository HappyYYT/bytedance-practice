import ejs from "ejs";
import fs from "fs";
// 开发思想 - 小步骤的开发思想
// 动态生成代码模板
export function createIndexTemple(config) {
  const template = fs.readFileSync("./template/index.ejs", "utf-8");

  const code = ejs.render(template, {
    port: config.port,
    router: config.middleware.router,
    static: config.middleware.static,
  });
  console.log(code);

  return code;

  return `
    const Koa = require("koa");

    const Router = require("koa-router");
    
    const serve = require("koa-static");
    
    const views = require("koa-views");
    
    const body = require("koa-body");
    
    const app = new Koa();
    
    app.use(serve(__dirname + "/static"));
    
    app.use(
      views(__dirname + "/views", {
        extension: "pug",
      })
    );
    
    app.use(
      body({
        multipart: true,
      })
    );
    
    const router = new Router();
    router.get("/", (ctx) => {
      ctx.body = "hello hei";
    });
    app.use(router.routes());
    
    app.listen(8080, () => {
      console.log("open server localhost:8080");
    });`;
}
