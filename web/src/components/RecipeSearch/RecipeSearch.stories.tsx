// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RecipeSearch> = (args) => {
//   return <RecipeSearch {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RecipeSearch from './RecipeSearch'

export const generated = () => {
  return <RecipeSearch />
}

export default {
  title: 'Components/RecipeSearch',
  component: RecipeSearch,
} as ComponentMeta<typeof RecipeSearch>
