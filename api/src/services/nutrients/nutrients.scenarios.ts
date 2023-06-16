import type { Prisma, Nutrient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NutrientCreateArgs>({
  nutrient: {
    one: { data: { name: 'String', baseUnit: 'String' } },
    two: { data: { name: 'String', baseUnit: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Nutrient, 'nutrient'>
