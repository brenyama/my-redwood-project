type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='flex-row'>
      {children}
    </div>
  )
}

export default AppLayout
