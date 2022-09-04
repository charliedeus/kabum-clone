import { ReactNode } from 'react'

import styles from '../DefaultLayout/styles.module.css'
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
      <main className={styles.pageContent}>{children}</main>
    </>
  )
}
