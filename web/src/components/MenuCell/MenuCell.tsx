import type { FindMenuQuery, FindMenuQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Menu from '../Menu/Menu'

export const QUERY = gql`
  query FindMenuQuery($id: Int!) {
    menu: menu(id: $id) {
      id
      menuItems {
        id
        menuId
        recipeId
        servingValue
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMenuQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  menu,
}: CellSuccessProps<FindMenuQuery, FindMenuQueryVariables>) => {
  return <Menu menu={menu} />
}
