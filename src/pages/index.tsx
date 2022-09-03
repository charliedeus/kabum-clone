import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'

const Home: NextPageWithLayout = () => {
  return <h1>Kabum HomePage</h1>
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
