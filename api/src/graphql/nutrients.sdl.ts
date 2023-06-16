export const schema = gql`
  type Nutrient {
    id: Int!
    name: String!
    baseUnit: String!
    recipeNutrient: RecipeNutrient
  }

  type Query {
    nutrients: [Nutrient!]! @requireAuth
    nutrient(id: Int!): Nutrient @requireAuth
  }

  input CreateNutrientInput {
    name: String!
    baseUnit: String!
  }

  input UpdateNutrientInput {
    name: String
    baseUnit: String
  }

  type Mutation {
    createNutrient(input: CreateNutrientInput!): Nutrient! @requireAuth
    updateNutrient(id: Int!, input: UpdateNutrientInput!): Nutrient!
      @requireAuth
    deleteNutrient(id: Int!): Nutrient! @requireAuth
  }
`
