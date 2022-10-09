import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const create = async ctx => {



  if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
    ctx.status = 400
    return
  }

  const { gameId}  = ctx.request.body
  const homeTeamScore = parseInt(ctx.request.body.homeTeamScore)
  const awayTeamScore = parseInt(ctx.request.body.awayTeamScore)
  const userId = 'cl91obubi0000tmu49t2z0rfk'

  try {
  const [hunch] = await prisma.hunch.findMany({
    where: {
      userId,
      gameId
    },
  })
  ctx.body = hunch ? 
     await prisma.hunch.update({
      where: {
        id: hunch.id
      },
      data:  {
        homeTeamScore,
        awayTeamScore
      }
    })
  : await  prisma.hunch.create({
      data: {
       
          userId,
          gameId, 
          homeTeamScore,
          awayTeamScore
       
      }
    })
  


}catch(error) {

  ctx.body = error
  ctx.status = 500
}


  const hunch = await prisma.hunch.create

}