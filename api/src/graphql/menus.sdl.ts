export const schema = gql`
  type Menu {
    id: Int!
    date: DateTime!
    menuItems: [MenuItem]!
  }

  type Query {
    menus: [Menu!]! @requireAuth
    menu(id: Int!): Menu @requireAuth
  }

  input CreateMenuInput {
    date: DateTime!
  }

  input UpdateMenuInput {
    date: DateTime
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu! @requireAuth
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu! @requireAuth
    deleteMenu(id: Int!): Menu! @requireAuth
  }
`
