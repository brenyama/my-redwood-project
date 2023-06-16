// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MenuItem> = (args) => {
//   return <MenuItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MenuItem from './MenuItem'

export const generated = () => {
  return <MenuItem />
}

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>
