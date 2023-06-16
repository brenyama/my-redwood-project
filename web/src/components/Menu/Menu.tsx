import { useMutation } from "@redwoodjs/web"

const CREATE_MENU_ITEM = gql`
  mutation createMenuItemMutation($input: CreateMenuItemInput!) {
    createMenuItem(input: $input) {
      id
    }
  }
`

const Menu = ({
  menu,
}) => {
  const [create] = useMutation(CREATE_MENU_ITEM)

  const onAddMenuItem = e => {
    create({ variables: { input: {
      menuId: menu.id,
      recipeId: 1,
      servingValue: 1,
    } } })
  }

  return (
    <div className='flex flex-col align-center w-1/3 h-full bg-slate-200 py-4'>
      <h2 className='text-center'>Menu {menu?.id}</h2>
      <button onClick={onAddMenuItem}>Add Item +</button>
    </div>
  )
}

export default Menu
