const MenuItem = ({
  menuItem,
}) => {
  const {id, name, recipe} = menuItem
  return (
    <div className='flex justify-between w-full rounded-md bg-white p-2'>
      <strong>{recipe?.name}</strong>
      <div className='flex'>
        <div>{recipe?.serviceSize || 0}</div>
        <div className='ml-1'>{recipe?.servingUnit}</div>
      </div>
    </div>
  )
}

export default MenuItem
