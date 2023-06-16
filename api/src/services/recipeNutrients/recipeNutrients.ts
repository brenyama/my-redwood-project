import type {
  QueryResolvers,
  MutationResolvers,
  RecipeNutrientRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recipeNutrients: QueryResolvers['recipeNutrients'] = () => {
  return db.recipeNutrient.findMany()
}

export const recipeNutrient: QueryResolvers['recipeNutrient'] = ({ id }) => {
  return db.recipeNutrient.findUnique({
    where: { id },
  })
}

export const createRecipeNutrient: MutationResolvers['createRecipeNutrient'] =
  ({ input }) => {
    return db.recipeNutrient.create({
      data: input,
    })
  }

export const updateRecipeNutrient: MutationResolvers['updateRecipeNutrient'] =
  ({ id, input }) => {
    return db.recipeNutrient.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecipeNutrient: MutationResolvers['deleteRecipeNutrient'] =
  ({ id }) => {
    return db.recipeNutrient.delete({
      where: { id },
    })
  }

export const RecipeNutrient: RecipeNutrientRelationResolvers = {
  nutrient: (_obj, { root }) => {
    return db.recipeNutrient.findUnique({ where: { id: root?.id } }).nutrient()
  },
  recipe: (_obj, { root }) => {
    return db.recipeNutrient.findUnique({ where: { id: root?.id } }).recipe()
  },
}
