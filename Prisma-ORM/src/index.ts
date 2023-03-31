import { PrismaClient } from '@prisma/client'

//estabelecendo a conexão com o DB
async function main() {
  const prisma = new PrismaClient({
    log:['query']
  })

  await prisma.enrollment.findMany()

  await prisma.trail.findUnique({
    where:{
      slug:"trila-de-react"
    }
  })

  // const student = await prisma.student.findMany({
  //   include: {
  //     enrollments: {
  //       include: {
  //         Trail: true
  //       }
  //     }
  //   }
    
  // })
  // console.log(JSON.stringify(student,null,2));

  // await prisma.student.findMany({
  //   where: {
  //     AND: {
  //       name: {
  //         contains: 'diego'
  //       },
  //       email: {
  //         startsWith: 'luiz'
  //       }
  //     }
  //   }

  // })

  // await prisma.student.create({
  //   data: {
  //     name: "carlos",
  //     email: "carlos@gmail.com",
  //     enrollments: {
  //       create: {
  //         Trail: {
  //           connect: {
  //             slug: "trilha-de-react"
  //           }
  //         }
  //       }
  //     }
  //   }
  // })
}

main()