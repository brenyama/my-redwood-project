import type { RecipeNutrient } from '@prisma/client'

import {
  recipeNutrients,
  recipeNutrient,
  createRecipeNutrient,
  updateRecipeNutrient,
  deleteRecipeNutrient,
} from './recipeNutrients'
import type { StandardScenario } from './recipeNutrients.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipeNutrients', () => {
  scenario(
    'returns all recipeNutrients',
    async (scenario: StandardScenario) => {
      const result = await recipeNutrients()

      expect(result.length).toEqual(Object.keys(scenario.recipeNutrient).length)
    }
  )

  scenario(
    'returns a single recipeNutrient',
    async (scenario: StandardScenario) => {
      const result = await recipeNutrient({
        id: scenario.recipeNutrient.one.id,
      })

      expect(result).toEqual(scenario.recipeNutrient.one)
    }
  )

  scenario('creates a recipeNutrient', async (scenario: StandardScenario) => {
    const result = await createRecipeNutrient({
      input: {
        nutrientId: scenario.recipeNutrient.two.nutrientId,
        recipeId: scenario.recipeNutrient.two.recipeId,
        amount: 6003925,
      },
    })

    expect(result.nutrientId).toEqual(scenario.recipeNutrient.two.nutrientId)
    expect(result.recipeId).toEqual(scenario.recipeNutrient.two.recipeId)
    expect(result.amount).toEqual(6003925)
  })

  scenario('updates a recipeNutrient', async (scenario: StandardScenario) => {
    const original = (await recipeNutrient({
      id: scenario.recipeNutrient.one.id,
    })) as RecipeNutrient
    const result = await updateRecipeNutrient({
      id: original.id,
      input: { amount: 2443561 },
    })

    expect(result.amount).toEqual(2443561)
  })

  scenario('deletes a recipeNutrient', async (scenario: StandardScenario) => {
    const original = (await deleteRecipeNutrient({
      id: scenario.recipeNutrient.one.id,
    })) as RecipeNutrient
    const result = await recipeNutrient({ id: original.id })

    expect(result).toEqual(null)
  })
})
