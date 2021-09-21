const Koa = require("koa");

  const Router = require("koa-router");


const app = new Koa();


const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello hei";
});
app.use(router.routes());


app.listen(8080, () => {
  console.log("open server localhost:8080");
});
