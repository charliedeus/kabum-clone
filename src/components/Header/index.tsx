/* eslint-disable react/no-unknown-property */
import Link from 'next/link'
import { List } from 'phosphor-react'
import Logo from '../Logo'

export function Header() {
  return (
    <header className="w-full laptop:p-[1.8125rem_0rem] flex items-center justify-between -bg--blue">
      <div className="laptop:w-[94rem] flex m-auto">
        <div className="flex items-center gap-8 laptop:w-full">
          <List size={32} weight="bold" color="white" />
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className="w-[35rem] min-w-[35rem]">
            <form
              action=""
              className="w-[calc(100%-3rem)] flex items-center relative"
            >
              <input
                type="text"
                autoComplete="off"
                placeholder="Busque aqui"
                className="w-full h-[2.25rem] flex-1 text-[.875rem] text--- leading-[1.3125rem] rounded-[.25rem] px-4 placeholder:-text--text-grey-mid"
              />
              <button
                type="submit"
                className="before:w-[6rem] before:h-[2.75rem] absolute before:cursor-pointer top-[-6px] right-[-42px]"
              >
                <svg
                  width="64"
                  height="47"
                  viewBox="0 0 64 47"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                  className="IconHeaderSearch"
                >
                  <g>
                    <path
                      opacity="0.2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.44003 46.3732C2.33389 46.3732 0.0479286 44.8936 0.00727544 41.6467L0.00571271 41.6074C-0.111556 38.2222 1.57555 35.1922 5.16554 32.3479C8.48815 29.7142 12.7677 27.7283 16.5422 25.9752C17.5178 25.5223 18.7296 24.961 19.8007 24.4295L22.0991 23.2912L20.2307 21.5301C13.2102 14.9137 8.37401 9.8885 10.1143 5.46235C11.0196 3.16044 13.3259 1.99219 16.9722 1.99219C17.1332 1.99219 17.2989 1.99376 17.4678 1.99848L17.5491 2.00162C20.2901 2.12426 24.9042 4.129 30.1954 7.50011L31.834 8.54415L32.7206 6.80828C33.7025 4.88845 35.8274 3.91517 39.0343 3.91517C39.1969 3.91517 39.3674 3.91831 39.5409 3.92303C42.224 3.98907 46.4707 5.82085 51.5055 9.08189C55.7443 11.8272 59.647 15.0332 61.1668 16.6543C63.0807 18.6606 63.889 21.0506 63.4528 23.3965C62.4474 28.8022 55.6912 32.3589 48.8583 35.5382L48.7536 35.5869C48.3892 35.7567 48.0531 35.9124 47.7529 36.0555L47.7153 36.0728L47.6778 36.0932C39.2986 40.5838 33.2272 43.554 29.6309 44.9203C28.8742 45.2128 28.1471 45.359 27.4591 45.359C25.0606 45.359 23.3031 43.6169 23.0889 41.0225L23.0826 40.9423C23.0811 40.8857 23.0779 40.8008 23.0764 40.7945L22.8934 38.0964L20.4996 39.3275C15.4367 41.9329 10.2628 44.5351 6.7041 45.9235L6.6056 45.9612C5.83475 46.238 5.12645 46.3732 4.44003 46.3732Z"
                      fill="black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.85214 45.008C2.746 45.008 0.46004 43.5284 0.419387 40.2815L0.417822 40.2422C0.300553 36.8569 1.98766 33.827 5.57764 30.9826C8.90025 28.349 13.1798 26.3631 16.9543 24.6099C17.9299 24.1571 19.1417 23.5958 20.2128 23.0643L22.5112 21.9259L20.6428 20.1649C13.6223 13.5485 8.78611 8.52327 10.5264 4.09712C11.4317 1.79521 13.738 0.626953 17.3842 0.626953C17.5453 0.626953 17.711 0.628527 17.8799 0.633244L17.9612 0.636389C20.7022 0.759032 25.3163 2.76377 30.6075 6.13488L32.2461 7.17892L33.1326 5.44305C34.1146 3.52321 36.2395 2.54993 39.4464 2.54993C39.609 2.54993 39.7794 2.55308 39.953 2.55779C42.6361 2.62383 46.8828 4.45562 51.9175 7.71666C56.1564 10.462 60.0591 13.668 61.5789 15.2891C63.4927 17.2954 64.3011 19.6853 63.8648 22.0313C62.8595 27.437 56.1032 30.9937 49.2704 34.1729L49.1656 34.2217C48.8013 34.3915 48.4651 34.5472 48.1649 34.6902L48.1274 34.7075L48.0899 34.728C39.7106 39.2186 33.6393 42.1888 30.043 43.5551C29.2862 43.8476 28.5592 43.9938 27.8712 43.9938C25.4727 43.9938 23.7152 42.2516 23.501 39.6573L23.4947 39.5771C23.4932 39.5205 23.49 39.4356 23.4885 39.4293L23.3055 36.7311L20.9117 37.9623C15.8488 40.5677 10.6749 43.1699 7.11621 44.5583L7.0177 44.596C6.24529 44.8743 5.53699 45.008 4.85214 45.008Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M59.3729 17.4425C55.9956 13.8199 44.5157 5.78361 39.9 5.6704C27.7432 5.33078 45.8651 19.3655 47.3286 21.5165C51.3799 25.8168 26.2797 29.7792 26.6174 39.4003C26.73 40.7588 27.518 41.2117 28.9815 40.6456C34.046 38.7211 43.3884 33.7415 46.7657 31.9301C51.494 29.6659 65.5631 23.8939 59.3729 17.4425ZM38.8868 16.4237C35.2843 12.5746 22.9039 3.97227 17.8379 3.74585C4.66939 3.40622 24.2533 18.5731 25.8294 20.9504C30.3325 25.592 3.0933 29.7792 3.54361 40.1928C3.54361 41.7777 4.44423 42.2306 6.02033 41.6645C11.5351 39.5135 21.553 34.0811 25.268 32.2698C30.3325 29.6659 45.5289 23.441 38.8868 16.4237Z"
                      fill="#EF5223"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1191 6.00955C15.1191 6.57559 16.0198 7.93409 16.3575 8.27372C17.3707 9.85864 18.8342 11.3304 20.071 12.6873C21.5345 14.159 22.998 15.5175 24.5741 16.9892C25.3622 17.6685 26.6005 18.8006 27.276 19.8194C27.8389 20.3855 28.1766 21.1779 28.1766 21.9704C28.1766 22.0836 28.1766 22.0836 28.1766 22.1968C28.8521 21.9704 29.415 21.8572 30.0904 21.744C33.0175 21.0647 35.8303 20.4987 38.6448 20.0458C38.6448 19.1402 38.0819 18.3477 37.519 17.7817C34.3668 14.3854 22.2115 5.78313 17.821 5.66992C17.3707 5.66992 15.682 5.66992 15.1191 6.00955Z"
                      fill="#F26C21"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.6133 7.81966C37.7259 9.17816 41.2158 12.9125 42.1149 13.8182C43.4658 15.1767 44.8167 16.422 46.1661 17.7805C46.5038 18.1201 46.9542 18.4597 47.517 18.9126C51.1196 18.6861 54.6079 18.5729 57.8727 18.5729C54.8331 15.5163 43.9161 7.70645 39.8633 7.59324C39.4145 7.48003 38.0636 7.59324 37.6133 7.81966Z"
                      fill="#F26C21"
                    ></path>
                  </g>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="laptop:min-w-[30rem] flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex -space-x-2 overflow-hidden">
              <picture>
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-center"
                  src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=40"
                  alt="Foto de um homem sorrindo"
                />
              </picture>
            </div>
            <div className="text-xs -text--white flex flex-col gap-[.225rem] justify-center">
              <h1>
                Faça <span className="font-bold">Login</span> ou
              </h1>
              <h1>
                crie seu <span className="font-bold">Cadastro</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                className="IconHeaderSupport"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4175 7.08151H21.8906C23.0537 7.08151 24 8.02776 24 9.18901V12.0015C24 13.1646 23.0537 14.1109 21.8906 14.1109H20.4087C19.275 16.8334 16.9169 18.8234 14.1094 19.4909V20.4396C14.1094 21.6028 13.1631 22.549 12 22.549C10.8369 22.549 9.89062 21.6028 9.89062 20.4396C9.89062 19.2765 10.8431 18.3303 12.0138 18.3303C15.275 18.3303 18.195 16.2596 19.2806 13.1771L19.2837 13.169C19.7212 11.9621 19.8419 10.6296 19.6306 9.31464C19.5681 8.87464 19.4581 8.44714 19.3013 8.03089L19.2956 8.01526C18.3244 5.29089 15.8725 3.29401 13.0487 2.92589C10.3781 2.57589 7.76437 3.59714 6.0525 5.66026C4.31062 7.75964 3.81562 10.504 4.695 13.1903L4.99688 14.1128H2.10938C0.94625 14.1128 0 13.1665 0 12.0034V9.19089C0 8.02776 0.94625 7.08151 2.10938 7.08151H3.5575C3.90313 6.25901 4.37438 5.47964 4.96938 4.76276C6.9925 2.32464 10.0844 1.11339 13.2313 1.53276C16.4062 1.94526 19.165 4.10714 20.4175 7.08151ZM5.67188 16.9253V15.519C6.3125 15.519 6.85375 15.099 7.02312 14.5059C6.14937 13.3947 5.67188 12.0197 5.67188 10.5972C5.67188 7.10717 8.51062 4.26904 12 4.26904C15.4894 4.26904 18.3281 7.10717 18.3281 10.5972C18.3281 14.0865 15.4894 16.9253 12 16.9253H5.67188ZM15.5156 9.89404H14.1094V11.3003H15.5156V9.89404ZM9.89062 9.89404H8.48438V11.3003H9.89062V9.89404ZM12.7031 9.89404H11.2969V11.3003H12.7031V9.89404Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
                className="IconHeaderFavorites"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 6.1125C24 2.7375 21.225 0 17.775 0C15.15 0 12.9 1.6125 12 3.8625C11.1 1.6125 8.85 0 6.225 0C2.775 0 0 2.7375 0 6.1125C0 6.15 0 6.45 0 6.5625C0 12.8625 12.45 21 12.45 21C12.45 21 24 12.8625 24 6.5625C24 6.45 24 6.1875 24 6.1125Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
                className="IconHeaderCart"
              >
                <g opacity="0.8">
                  <path
                    d="M7.19975 19.2C5.8798 19.2 4.81184 20.28 4.81184 21.6C4.81184 22.92 5.8798 24 7.19975 24C8.51971 24 9.59967 22.92 9.59967 21.6C9.59967 20.28 8.51971 19.2 7.19975 19.2ZM0 0V2.4H2.39992L6.71977 11.508L5.09982 14.448C4.90783 14.784 4.79984 15.18 4.79984 15.6C4.79984 16.92 5.8798 18 7.19975 18H21.5993V15.6H7.70374C7.53574 15.6 7.40375 15.468 7.40375 15.3L7.43974 15.156L8.51971 13.2H17.4594C18.3594 13.2 19.1513 12.708 19.5593 11.964L23.8552 4.176C23.9542 3.99286 24.004 3.78718 23.9997 3.57904C23.9955 3.37089 23.9373 3.16741 23.8309 2.98847C23.7245 2.80952 23.5736 2.66124 23.3927 2.55809C23.2119 2.45495 23.0074 2.40048 22.7992 2.4H5.05183L3.92387 0H0ZM19.1993 19.2C17.8794 19.2 16.8114 20.28 16.8114 21.6C16.8114 22.92 17.8794 24 19.1993 24C20.5193 24 21.5993 22.92 21.5993 21.6C21.5993 20.28 20.5193 19.2 19.1993 19.2Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
