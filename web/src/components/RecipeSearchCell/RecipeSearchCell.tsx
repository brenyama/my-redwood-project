import type {
  FindRecipeSearchQuery,
  FindRecipeSearchQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import RecipeSearch from '../RecipeSearch/RecipeSearch'

export const QUERY = gql`
  query FindRecipesQuery {
    recipes {
      id
      name
      servingSize
      servingUnit
      recipeNutrients {
        amount
        id
        nutrientId
        recipeId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRecipeSearchQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recipes,
  addRecipes,
  setAddRecipes,
}: CellSuccessProps<FindRecipeSearchQuery, FindRecipeSearchQueryVariables> & {addRecipes: number | null, setAddRecipes: React.Dispatch<(prevState: undefined) => undefined>}) => {
  return <RecipeSearch recipes={recipes} addRecipes={addRecipes} setAddRecipes={setAddRecipes} />
}
