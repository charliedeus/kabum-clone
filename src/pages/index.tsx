import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import { v4 as uuidV4 } from 'uuid'

import { Timer } from 'phosphor-react'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Banner } from '../components/Banner'
import { Slider } from '../components/Slider'

const products = [
  {
    id: uuidV4(),
    title: 'Ssd Samsung Ssd 980 Nvme M.2 1tb Mz-v8v1t0b/am',
    imageUrl:
      'https://images0.kabum.com.br/produtos/fotos/sync_mirakl/352030/Ssd-Samsung-Ssd-980-Nvme-M-2-1tb-Mz-v8v1t0b-am_1653757183_m.jpg',
  },
]

const Home: NextPageWithLayout = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <main className="flex flex-col w-full h-full laptop:max-w-[94rem] m-auto flex-1">
      <Banner />

      <section className="flex flex-col w-full h-full -bg--background-principal">
        <header className="-bg--orange-weak w-full h-[4.125rem] px-8 flex items-center justify-between">
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
        </header>

        <div className="w-full h-full p-8">
          <Slider settings={settings}>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              1
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              2
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              3
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              4
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              5
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              6
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              7
            </div>
            <div className="-bg--text-grey w-[30rem] p-8 border -border--green-text -text--white text-center">
              8
            </div>
          </Slider>
        </div>
      </section>
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
