import type { Recipe } from '@prisma/client'

import {
  recipes,
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipes'
import type { StandardScenario } from './recipes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipes', () => {
  scenario('returns all recipes', async (scenario: StandardScenario) => {
    const result = await recipes()

    expect(result.length).toEqual(Object.keys(scenario.recipe).length)
  })

  scenario('returns a single recipe', async (scenario: StandardScenario) => {
    const result = await recipe({ id: scenario.recipe.one.id })

    expect(result).toEqual(scenario.recipe.one)
  })

  scenario('creates a recipe', async () => {
    const result = await createRecipe({
      input: {
        name: 'String8074676',
        servingSize: 6890394,
        servingUnit: 'String',
      },
    })

    expect(result.name).toEqual('String8074676')
    expect(result.servingSize).toEqual(6890394)
    expect(result.servingUnit).toEqual('String')
  })

  scenario('updates a recipe', async (scenario: StandardScenario) => {
    const original = (await recipe({ id: scenario.recipe.one.id })) as Recipe
    const result = await updateRecipe({
      id: original.id,
      input: { name: 'String77145682' },
    })

    expect(result.name).toEqual('String77145682')
  })

  scenario('deletes a recipe', async (scenario: StandardScenario) => {
    const original = (await deleteRecipe({
      id: scenario.recipe.one.id,
    })) as Recipe
    const result = await recipe({ id: original.id })

    expect(result).toEqual(null)
  })
})
