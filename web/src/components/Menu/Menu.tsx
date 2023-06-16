import { useMutation } from '@redwoodjs/web'
import MenuItemCell from 'src/components/MenuItemCell'

const Menu = ({
  menu,
  setAddRecipes,
}) => {
  const {id, menuItems} = menu;

  const onAddMenuItem = e => {
    setAddRecipes(id);
  }

  return (
    <div className='flex flex-col h-full align-center bg-slate-100 py-4 px-2 rounded-lg'>
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
