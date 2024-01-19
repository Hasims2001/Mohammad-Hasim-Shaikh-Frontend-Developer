import React from 'react'
import { RightArrowSVG } from './svgs/RightArrowSVG'

interface CardButtonProps {
    values: string,
    className: string,
}
export const CardButton: React.FC<CardButtonProps> = ({values, className}) => {
  return (
    <button className={`flex text-black gap-[8px] font-bold text-black400 pl-[24px] pr-[20px] py-[10px] rounded-full border-2 border-white ${className}`} style={{background: "linear-gradient(95deg, #FECC00 -2.53%, #FEA800 102.53%)"}}>{values} <RightArrowSVG /></button>
  )
}
