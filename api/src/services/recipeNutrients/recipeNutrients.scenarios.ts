import type { Prisma, RecipeNutrient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeNutrientCreateArgs>({
  recipeNutrient: {
    one: {
      data: {
        amount: 1741959,
        nutrient: { create: { name: 'String', baseUnit: 'String' } },
        recipe: {
          create: {
            name: 'String2727112',
            servingSize: 3988200,
            servingUnit: 'String',
          },
        },
      },
    },
    two: {
      data: {
        amount: 8916730,
        nutrient: { create: { name: 'String', baseUnit: 'String' } },
        recipe: {
          create: {
            name: 'String651329',
            servingSize: 6521820,
            servingUnit: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<RecipeNutrient, 'recipeNutrient'>
