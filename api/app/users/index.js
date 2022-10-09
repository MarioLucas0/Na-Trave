import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()


export const create = async (ctx) =>  {
  const password  = await bcrypt.hash(ctx.request.body.password, 10)
  const data =  {
    name: ctx.request.body.name,
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password,
  }

  try {

    const {password, ...user } = await prisma.user.create({ data })
    ctx.body = user
    ctx.status = 201
    
  } catch (error) {

    ctx.body = error
    ctx.status = 500
  }

}

