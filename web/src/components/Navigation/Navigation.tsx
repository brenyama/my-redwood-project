import { Link, routes } from '@redwoodjs/router'

const Navigation = () => {
  return (
    <div className='flex flex-col align-center w-20 h-full bg-secondary text-white py-4 px-2'>
      <Link className='mb-3' to={routes.home()}>Home</Link>
      <Link className='mb-3' to={routes.menus()}>Menu</Link>
    </div>
  )
}

export default Navigation
