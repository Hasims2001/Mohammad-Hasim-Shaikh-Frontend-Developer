import React from 'react'
import { Vector_1SVG } from './svgs/Vector_1SVG'
import { GatewaySVG } from './svgs/GatewaySVG'

export const SectionOne = () => {
  return (
    <div className="grid place-items-center min-h-screen">
        <GatewaySVG />
        <p className="text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem]">
          DeFi on <span className="text-yellow400">Bitcoin</span>
        </p>
       <Vector_1SVG />
      </div>
  )
}
