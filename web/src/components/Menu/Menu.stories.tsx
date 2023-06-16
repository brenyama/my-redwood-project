// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Menu> = (args) => {
//   return <Menu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Menu from './Menu'

export const generated = () => {
  return <Menu />
}

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>
