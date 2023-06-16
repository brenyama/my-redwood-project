import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        name: 'String5127488',
        servingSize: 6329112,
        servingUnit: 'String',
      },
    },
    two: {
      data: {
        name: 'String4563312',
        servingSize: 7952959,
        servingUnit: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
