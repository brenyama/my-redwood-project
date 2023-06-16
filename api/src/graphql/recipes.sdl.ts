export const schema = gql`
  type Recipe {
    id: Int!
    name: String!
    recipeNutrients: [RecipeNutrient]!
    MenuItem: MenuItem
    servingSize: Int!
    servingUnit: String!
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: Int!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    name: String!
    servingSize: Int!
    servingUnit: String!
  }

  input UpdateRecipeInput {
    name: String
    servingSize: Int
    servingUnit: String
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: Int!): Recipe! @requireAuth
  }
`
