import React from 'react'
import { Vector_1SVG } from './svgs/Vector_1SVG'
import { GatewaySVG } from './svgs/GatewaySVG'
import { CardButton } from './CardButton'
import Image from 'next/image'
import { SmallStarSVG } from './svgs/SmallStarSVG'
import { HalfStarSVG } from './svgs/HalfStarSVG'
import { CircleStarSVG } from './svgs/CircleStarSVG'

export const SectionOne = () => {
  return (
    <div className='text-center mt-36'>
    <div className="grid place-items-center relative ">
        <GatewaySVG /> 
        <span className='absolute left-[511px] top-5'><HalfStarSVG /></span>
        <span className='absolute right-[384px] top-4'><SmallStarSVG /></span>
        <div className='flex gap-4 text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem]'>
        <p className="text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem] relative z-10">
          DeFi on </p>
          <span className='absolute left-[297px] bottom-12 z-10'><SmallStarSVG /></span>
        <p className="text-yellow400 relative z-0">Bitcoin</p>
        </div>
        <Image src={'/bithouse.png'} className='z-1 absolute top-[-15px]'  width={324} height={324} alt='bithouse'/>
        <span className='absolute right-60 top-2'><CircleStarSVG /></span>
       <span className='absolute top-[300px] z-1 right-[300px] '><Vector_1SVG /></span>
      </div>
      <div className='flex flex-col gap-[40px] pt-12 items-center'>
        <p>Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin <br></br> eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.</p>
        <span ><CardButton values='Get Started' className='' /></span>
      </div>
      <Image src={"/7.png"} className='absolute z-10 right-0 top-[520px]' width={250} height={250} alt='star'/>
      </div>
  )
}
