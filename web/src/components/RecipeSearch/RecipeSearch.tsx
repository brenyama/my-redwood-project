import { useMutation } from '@redwoodjs/web'
import {QUERY as MENU_CELL_QUERY} from 'src/components/MenuCell'

const CREATE_MENU_ITEM = gql`
  mutation createMenuItemMutation($input: CreateMenuItemInput!) {
    createMenuItem(input: $input) {
      id,
      recipeId,
      menuId,
    }
  }
`

const RecipeSearch = ({
  recipes,
  addRecipes,
  setAddRecipes,
}) => {
  const [create] = useMutation(CREATE_MENU_ITEM)

  const onSelect = (e, recipe) => {
    create({ variables: { input: {
      menuId: addRecipes,
      recipeId: recipe?.id,
      servingValue: 1,
    } }, refetchQueries: [{query: MENU_CELL_QUERY, variables: { id: addRecipes }}] })
    setAddRecipes(null); // close panel
  }

  return (
    <div className='flex flex-col absolute right-0 top-0 h-full bg-white px-4'>
      <input type='text'></input>
      {
        recipes.map(recipe => {
          return (
            <button key={recipe?.id} onClick={e => onSelect(e, recipe)} className='text-left px-2 mb-2'>{recipe.name}</button>
          )
        })
      }
    </div>
  )
}

export default RecipeSearch
