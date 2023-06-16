import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MenusPage = () => {
  return (
    <>
      <MetaTags title="Menus" description="Menus page" />

      <h1>MenusPage</h1>
      <p>
        Find me in <code>./web/src/pages/MenusPage/MenusPage.tsx</code>
      </p>
      <p>
        My default route is named <code>menus</code>, link to me with `
        <Link to={routes.menus()}>Menus</Link>`
      </p>
    </>
  )
}

export default MenusPage
