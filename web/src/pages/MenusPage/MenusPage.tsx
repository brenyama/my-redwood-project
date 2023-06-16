import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import MenuCell from 'src/components/MenuCell'

const MenusPage = () => {
  return (
    <>
      <MetaTags title="Menus" description="Menus page" />
      <div className='flex flex-row h-full'>
        <MenuCell id={1} />
        <MenuCell id={2} />
        <MenuCell id={3} />
        <MenuCell id={4} />
        <MenuCell id={5} />
      </div>
    </>
  )
}

export default MenusPage
