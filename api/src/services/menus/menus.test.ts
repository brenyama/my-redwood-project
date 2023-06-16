import type { Menu } from '@prisma/client'

import { menus, menu, createMenu, updateMenu, deleteMenu } from './menus'
import type { StandardScenario } from './menus.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menus', () => {
  scenario('returns all menus', async (scenario: StandardScenario) => {
    const result = await menus()

    expect(result.length).toEqual(Object.keys(scenario.menu).length)
  })

  scenario('returns a single menu', async (scenario: StandardScenario) => {
    const result = await menu({ id: scenario.menu.one.id })

    expect(result).toEqual(scenario.menu.one)
  })

  scenario('creates a menu', async () => {
    const result = await createMenu({
      input: { date: '2023-06-16T04:18:47.748Z' },
    })

    expect(result.date).toEqual(new Date('2023-06-16T04:18:47.748Z'))
  })

  scenario('updates a menu', async (scenario: StandardScenario) => {
    const original = (await menu({ id: scenario.menu.one.id })) as Menu
    const result = await updateMenu({
      id: original.id,
      input: { date: '2023-06-17T04:18:47.749Z' },
    })

    expect(result.date).toEqual(new Date('2023-06-17T04:18:47.749Z'))
  })

  scenario('deletes a menu', async (scenario: StandardScenario) => {
    const original = (await deleteMenu({ id: scenario.menu.one.id })) as Menu
    const result = await menu({ id: original.id })

    expect(result).toEqual(null)
  })
})
