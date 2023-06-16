import Navigation from 'src/components/Navigation/Navigation'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='flex flex-row w-full h-screen'>
      <Navigation />
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}

export default AppLayout
