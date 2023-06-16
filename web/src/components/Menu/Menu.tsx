const Menu = ({
  menu,
}) => {
  return (
    <div className='flex flex-col align-center w-1/3 h-full bg-slate-200 py-4'>
      <h2 className='text-center'>Menu {menu?.id}</h2>
      <button>Add Item +</button>
    </div>
  )
}

export default Menu
