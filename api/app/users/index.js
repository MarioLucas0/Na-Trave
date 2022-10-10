import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const create = async (ctx) => {
  const password =  bcrypt.hashSync(ctx.request.body.password, 10);
  const data = {
    name: ctx.request.body.name,
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password,
  }
//Error Handling
  try{
    const { password, ...user} = await prisma.user.create({data})
    ctx.body = user
    ctx.status = 201
  }catch (error){
    ctx.body = error
    ctx.status = 500
  }
}

export const login = async ctx =>{
  const [type, token] = ctx.headers.authorization.split(" ")
  const [email, platinTextPassword] = atob(token).split(":")

  const user = await prisma.user.findUnique({
  where:{email}
  })

  if(!user){
  ctx.user = 404
  return
}

  const passwordMach = await bcrypt.compare(platinTextPassword, user.password)

  if(!passwordMach){
  ctx.user = 404
  return
  }

  const {password, ...result} = user

  const acessToken = jwt.sign({
  sub: user.id,
  name: user.name,
  expiresIn:"7d"
  }, process.env.JWT_SECRET)

  ctx.body ={
  user:result,
  acessToken
  }
}