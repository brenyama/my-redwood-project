import type { Nutrient } from '@prisma/client'

import {
  nutrients,
  nutrient,
  createNutrient,
  updateNutrient,
  deleteNutrient,
} from './nutrients'
import type { StandardScenario } from './nutrients.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('nutrients', () => {
  scenario('returns all nutrients', async (scenario: StandardScenario) => {
    const result = await nutrients()

    expect(result.length).toEqual(Object.keys(scenario.nutrient).length)
  })

  scenario('returns a single nutrient', async (scenario: StandardScenario) => {
    const result = await nutrient({ id: scenario.nutrient.one.id })

    expect(result).toEqual(scenario.nutrient.one)
  })

  scenario('creates a nutrient', async () => {
    const result = await createNutrient({
      input: { name: 'String', baseUnit: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.baseUnit).toEqual('String')
  })

  scenario('updates a nutrient', async (scenario: StandardScenario) => {
    const original = (await nutrient({
      id: scenario.nutrient.one.id,
    })) as Nutrient
    const result = await updateNutrient({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a nutrient', async (scenario: StandardScenario) => {
    const original = (await deleteNutrient({
      id: scenario.nutrient.one.id,
    })) as Nutrient
    const result = await nutrient({ id: original.id })

    expect(result).toEqual(null)
  })
})
