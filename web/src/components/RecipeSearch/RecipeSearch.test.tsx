import { render } from '@redwoodjs/testing/web'

import RecipeSearch from './RecipeSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecipeSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecipeSearch />)
    }).not.toThrow()
  })
})
