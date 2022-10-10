//consumer service KOA / HTTP
import koa  from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import { router } from './router.js'

export const app = new koa()

app.use(cors())
// requisition handling
app.use(bodyParser())
// routing koa
app.use(router.routes())
app.use(router.allowedMethods())
