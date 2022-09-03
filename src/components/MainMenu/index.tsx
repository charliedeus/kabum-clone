import { CaretDown } from 'phosphor-react'

export function MainMenu() {
  return (
    <nav className="w-full h-8 -bg--orange-weak">
      <div className="laptop:w-[94rem] h-full flex items-center m-auto font-bold -text--white-weak uppercase text-[.875rem]">
        <div className="border-r-[1px] w-1/5 h-[70%] flex gap-3 items-center justify-center">
          <span>Todos os Departamentos</span>
          <CaretDown size={16} weight="bold" />
        </div>
        <ul className="w-full h-full flex items-center justify-around group-hover">
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Lançamentos
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Destaques
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              PC Gamer
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Eletrônicos
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Seja Prime
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Oferta do Dia
            </li>
          </a>
          <a
            href="#"
            className="w-full h-full flex items-center justify-center hover:-bg--text-grey hover:bg-opacity-30"
          >
            <li className="border-r-[1px] w-full h-[70%] flex items-center justify-center">
              Baixe o APP
            </li>
          </a>
        </ul>
      </div>
    </nav>
  )
}
