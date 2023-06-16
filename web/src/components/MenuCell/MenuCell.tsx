import type { FindMenuQuery, FindMenuQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMenuQuery($id: Int!) {
    menu: menu(id: $id) {
      id
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
  return <div>{JSON.stringify(menu)}</div>
}
