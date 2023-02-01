import { render } from '@redwoodjs/testing/web'

import TopNavBarPage from './TopNavBarPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopNavBarPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopNavBarPage />)
    }).not.toThrow()
  })
})
