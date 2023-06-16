import type { ComponentMeta } from '@storybook/react'

import MenusPage from './MenusPage'

export const generated = () => {
  return <MenusPage />
}

export default {
  title: 'Pages/MenusPage',
  component: MenusPage,
} as ComponentMeta<typeof MenusPage>
