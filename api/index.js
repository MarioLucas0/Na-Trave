import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = {ola: "Mundo"}
})

app.listen(3000)