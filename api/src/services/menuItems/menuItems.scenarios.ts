import type { Prisma, MenuItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MenuItemCreateArgs>({
  menuItem: {
    one: {
      data: {
        servingValue: 7712509,
        recipe: {
          create: {
            name: 'String2351808',
            servingSize: 3329921,
            servingUnit: 'String',
          },
        },
        menu: { create: { date: '2023-06-16T04:19:29.751Z' } },
      },
    },
    two: {
      data: {
        servingValue: 9625359,
        recipe: {
          create: {
            name: 'String33845',
            servingSize: 5305510,
            servingUnit: 'String',
          },
        },
        menu: { create: { date: '2023-06-16T04:19:29.751Z' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<MenuItem, 'menuItem'>
