import { ReactNode } from 'react'

import { Header } from '../../components/Header'
import { MainMenu } from '../../components/MainMenu'

interface LayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <MainMenu />
      <main>{children}</main>
    </>
  )
}
