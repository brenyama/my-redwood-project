import { useMutation } from '@redwoodjs/web'
import MenuItemCell from 'src/components/MenuItemCell'
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

const Menu = ({
  menu,
}) => {
  const [create] = useMutation(CREATE_MENU_ITEM)

  const {id, menuItems} = menu;

  const onAddMenuItem = e => {
    create({ variables: { input: {
      menuId: id,
      recipeId: 1,
      servingValue: 1,
    } }, refetchQueries: [{query: MENU_CELL_QUERY, variables: { id: id }}] })
  }

  return (
    <div className='flex flex-col align-center w-1/3 h-full bg-slate-200 py-4'>
      <h2 className='text-center'>Menu {id}</h2>
      <button onClick={onAddMenuItem}>Add Item +</button>
      {
        menuItems.map(item => {
          const {id} = item
          return (
            <div key={'menu-item-' + id} className='my-1'><MenuItemCell id={id} /></div>
          )
        })
      }
    </div>
  )
}

export default Menu
