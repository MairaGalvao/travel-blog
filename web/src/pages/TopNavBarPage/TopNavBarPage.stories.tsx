import type { ComponentMeta } from '@storybook/react'

import TopNavBarPage from './TopNavBarPage'

export const generated = () => {
  return <TopNavBarPage />
}

export default {
  title: 'Pages/TopNavBarPage',
  component: TopNavBarPage,
} as ComponentMeta<typeof TopNavBarPage>
