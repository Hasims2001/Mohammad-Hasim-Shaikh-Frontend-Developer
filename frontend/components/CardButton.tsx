import React from 'react'
import { RightArrowSVG } from './svgs/RightArrowSVG'

interface CardButtonProps {
    values: string,
    className: string,
}
export const CardButton: React.FC<CardButtonProps> = ({values, className}) => {
  return (
    <span className='flex justify-center items-center p-1 rounded-full w-fit h-fit' style={{background: "linear-gradient(95deg, #FECC00 -2.53%, #FEA800 102.53%)"}}>
      <button className={`flex text-black gap-[8px] font-bold text-black400 pl-[24px] pr-[20px] py-[10px] rounded-full border-2 border-white ${className}`} >{values} <RightArrowSVG /></button>
    </span>
  )
}
