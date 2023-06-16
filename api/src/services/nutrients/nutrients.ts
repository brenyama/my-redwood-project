import type {
  QueryResolvers,
  MutationResolvers,
  NutrientRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const nutrients: QueryResolvers['nutrients'] = () => {
  return db.nutrient.findMany()
}

export const nutrient: QueryResolvers['nutrient'] = ({ id }) => {
  return db.nutrient.findUnique({
    where: { id },
  })
}

export const createNutrient: MutationResolvers['createNutrient'] = ({
  input,
}) => {
  return db.nutrient.create({
    data: input,
  })
}

export const updateNutrient: MutationResolvers['updateNutrient'] = ({
  id,
  input,
}) => {
  return db.nutrient.update({
    data: input,
    where: { id },
  })
}

export const deleteNutrient: MutationResolvers['deleteNutrient'] = ({ id }) => {
  return db.nutrient.delete({
    where: { id },
  })
}

export const Nutrient: NutrientRelationResolvers = {
  recipeNutrient: (_obj, { root }) => {
    return db.nutrient.findUnique({ where: { id: root?.id } }).recipeNutrient()
  },
}
