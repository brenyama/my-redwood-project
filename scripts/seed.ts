import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }

    const menuData: Prisma.MenuCreateArgs['data'][] = [
      {date: new Date()},
      {date: new Date()},
      {date: new Date()},
      {date: new Date()},
      {date: new Date()},
    ]

    const recipeData: Prisma.RecipeCreateArgs['data'][] = [
      {name: 'Pepperoni Pizza', servingSize: 0, servingUnit: 'cups'},
      {name: 'Cheese Pizza', servingSize: 0, servingUnit: 'cups'},
      {name: 'Organic Apple', servingSize: 0, servingUnit: 'cups'},
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      [
        ...data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
          const record = await db.userExample.create({ data })
          console.log(record)
        }),
        ...menuData.map(async (data: Prisma.MenuCreateArgs['data']) => {
          const record = await db.menu.create({ data })
          console.log(record)
        }),
        ...recipeData.map(async (data: Prisma.RecipeCreateArgs['data']) => {
          const record = await db.recipe.create({ data })
          console.log(record)
        })
      ]
      )


  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
