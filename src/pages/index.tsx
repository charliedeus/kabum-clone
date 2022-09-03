import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Banner } from '../components/Banner'

const Home: NextPageWithLayout = () => {
  return (
    <main className="flex laptop:w-full laptop:max-w-[94rem] m-auto flex-1">
      <Banner />
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
