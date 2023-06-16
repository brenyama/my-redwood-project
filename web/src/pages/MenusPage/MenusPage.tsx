import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import MenuCell from 'src/components/MenuCell'
import RecipeSearchCell from 'src/components/RecipeSearchCell/RecipeSearchCell'

const MenusPage = () => {
  const [addRecipes, setAddRecipes] = useState();
  console.log(addRecipes)
  return (
    <>
      <MetaTags title="Menus" description="Menus page" />
      <div className='flex flex-row h-full'>
        <MenuCell id={1} setAddRecipes={setAddRecipes} />
        <MenuCell id={2} setAddRecipes={setAddRecipes} />
        <MenuCell id={3} setAddRecipes={setAddRecipes} />
        <MenuCell id={4} setAddRecipes={setAddRecipes} />
        <MenuCell id={5} setAddRecipes={setAddRecipes} />
      </div>
      {addRecipes && <RecipeSearchCell addRecipes={addRecipes} setAddRecipes={setAddRecipes} />}
    </>
  )
}

export default MenusPage
