import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Banner } from '../components/Banner'
import { Timer } from 'phosphor-react'

const Home: NextPageWithLayout = () => {
  return (
    <main className="flex flex-col w-full h-full laptop:max-w-[94rem] m-auto flex-1">
      <Banner />

      <section className="-bg--orange-weak w-full h-[4.125rem] px-8 flex items-center justify-between">
        <p className="-text--white text-xl font-[800] leading-[1.875rem] uppercase">
          Setembro Tech
        </p>

        <div className="flex items-center gap-2">
          <p className="uppercase -text--white text-base leading-7 font-bold">
            Termina em:
          </p>
          <Timer size={28} weight="bold" color="#fff" />
          <div className="-text--white text-2xl font-[800] leading-4 uppercase">
            <span>25</span>D <span>14</span>:<span>20</span>:<span>17</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
