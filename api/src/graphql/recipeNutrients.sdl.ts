export const schema = gql`
  type RecipeNutrient {
    id: Int!
    nutrient: Nutrient!
    nutrientId: Int!
    recipe: Recipe!
    recipeId: Int!
    amount: Int!
  }

  type Query {
    recipeNutrients: [RecipeNutrient!]! @requireAuth
    recipeNutrient(id: Int!): RecipeNutrient @requireAuth
  }

  input CreateRecipeNutrientInput {
    nutrientId: Int!
    recipeId: Int!
    amount: Int!
  }

  input UpdateRecipeNutrientInput {
    nutrientId: Int
    recipeId: Int
    amount: Int
  }

  type Mutation {
    createRecipeNutrient(input: CreateRecipeNutrientInput!): RecipeNutrient!
      @requireAuth
    updateRecipeNutrient(
      id: Int!
      input: UpdateRecipeNutrientInput!
    ): RecipeNutrient! @requireAuth
    deleteRecipeNutrient(id: Int!): RecipeNutrient! @requireAuth
  }
`
