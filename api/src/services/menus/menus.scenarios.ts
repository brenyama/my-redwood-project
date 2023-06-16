import type { Prisma, Menu } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MenuCreateArgs>({
  menu: {
    one: { data: { date: '2023-06-16T04:18:47.776Z' } },
    two: { data: { date: '2023-06-16T04:18:47.776Z' } },
  },
})

export type StandardScenario = ScenarioData<Menu, 'menu'>
