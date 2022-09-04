import { ReactNode } from 'react'
import SlickSlider, { Settings } from 'react-slick'

export type SliderSettings = Settings

export type SliderProps = {
  children: ReactNode
  settings: SliderSettings
}

export function Slider({ children, settings }: SliderProps) {
  return (
    <div className="w-full h-full">
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  )
}
