import type {
  FindMenuItemQuery,
  FindMenuItemQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import MenuItem from 'src/components/MenuItem/MenuItem'

export const QUERY = gql`
  query FindMenuItemQuery($id: Int!) {
    menuItem: menuItem(id: $id) {
      id
      recipe {
        id
        name
        servingUnit
        servingSize
      }
      servingValue
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMenuItemQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  menuItem,
}: CellSuccessProps<FindMenuItemQuery, FindMenuItemQueryVariables>) => {
  return <MenuItem menuItem={menuItem} />
}
