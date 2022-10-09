import Router from '@koa/router';
import * as users  from './app/users/index.js'
import * as hunches  from './app/Hunches/index.js'
import * as games from './app/Games/index.js'

export const router = new Router();

router.post('/users', users.create)
router.post('/hunches', hunches.create)
router.get('/games', games.list)
