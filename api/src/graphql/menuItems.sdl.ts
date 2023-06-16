export const schema = gql`
  type MenuItem {
    id: Int!
    recipe: Recipe!
    recipeId: Int!
    menu: Menu!
    menuId: Int!
    servingValue: Int!
  }

  type Query {
    menuItems: [MenuItem!]! @requireAuth
    menuItem(id: Int!): MenuItem @requireAuth
  }

  input CreateMenuItemInput {
    recipeId: Int!
    menuId: Int!
    servingValue: Int!
  }

  input UpdateMenuItemInput {
    recipeId: Int
    menuId: Int
    servingValue: Int
  }

  type Mutation {
    createMenuItem(input: CreateMenuItemInput!): MenuItem! @requireAuth
    updateMenuItem(id: Int!, input: UpdateMenuItemInput!): MenuItem!
      @requireAuth
    deleteMenuItem(id: Int!): MenuItem! @requireAuth
  }
`
