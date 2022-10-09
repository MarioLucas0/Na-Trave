import Koa from 'koa';
import Router from '@koa/router';
import bodyParser  from 'koa-bodyparser';
import cors from '@koa/cors';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = {ola: "Mundo"}
})

router.get('/users', async ctx => {
  ctx.body = {ola: "Gay"}
})

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000); 

