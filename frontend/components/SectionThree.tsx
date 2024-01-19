import React, { useState } from 'react'
import { Vector_2SVG } from './svgs/Vector_2SVG'
import { CircleSVG } from './svgs/CircleSVG'
import { LineSVG } from './svgs/LineSVG'
import { PhaseSVG } from './svgs/PhaseSVG'
import { RectangleSVG } from './svgs/RectangleSVG'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'

const data = [
    {
        "id": 1,
        "heading":"PHASE-1",
        "title": "Initial Design and Development",
        "tag": "Q4 2023",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
    },
    {
        "id": 2,
        "heading":"PHASE-2",
        "title": "Release and Testing of  Bita Market & Bridge",
        "tag": "Q1 2024",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
        "id": 3,
        "heading":"PHASE-3",
        "title": "Initial Design and Development",
        "tag": "Q2 2024",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
    },
   
    {
        "id": 4,
        "heading":"PHASE-4",
        "title": "Release and Testing of  Bita Market & Bridge",
        "tag": "Q1 2024",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
        "id": 5,
        "heading":"PHASE-5",
        "title": "Initial Design and Development",
        "tag": "Q4 2023",
        "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
    },
    
]
export const SectionThree = () => {
  
    const [visibleIndex, setVisibleIndex] = useState(0);

    const handleNext = () => {
      setVisibleIndex((prevIndex) => (prevIndex + 3 < data.length ? prevIndex + 3 : 0));
    };

    const handlePrev = () => {
        setVisibleIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : data.length - 3));
      };
 return  (
    <div className=''  style={{background: "linear-gradient(180deg, #FECC00 0%, #FECC00 71.23%, #0E0E0E 67.33%, rgba(14, 14, 14, 0.00) 100%)"}}>
        <div className='py-[60px] w-fit relative px-[112px]'>
        <h4 className='text-[56px]  text-black font-semibold font-[Kanit]'>Roadmap  <span className='absolute left-[210px] top-[135px]'><Vector_2SVG /></span></h4>
       
        </div>

        <div className='flex overflow-x-hidden self-stretch relative  items-center self-stretch pt-[115px] pl-[80px]  scrollbar-hide'>
            <button className='absolute left-4 top-2/2 transform -translate-y-2/2' onClick={handlePrev}>
            <ArrowLeftCircle size={44} />
      </button>
            <CircleSVG /><LineSVG />
            {data.slice(visibleIndex, visibleIndex + 3).map((item, ind)=>(
                <>
                <div key={item.id} className='relative min-h-[434px]'>
                    <p className='absolute top-[-200px]  left-[80px]  font-[Kanit] text-[200px] font-bold text-yellow400' style={{WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: "rgba(255, 255, 255, 0.40)",  zIndex: 0}}>0{item.id}</p>
                    <div className='flex z-10 flex-col items-center p-[24px] rounded-[20px] bg-black500 relative ' style={{zIndex: 1}}>
                       <span className='absolute top-[-20px]'><RectangleSVG /></span>
                        <span className='absolute top-[-20px]'><PhaseSVG /></span>
                        <span className=' font-[Kanit] text-[20px] font-bold text-black400 z-10 absolute top-[-5px]'>{item.heading}</span>
                    <div className='flex flex-col items-center px-[16px] py-[36px] bg-black100 rounded-[16px] border-2 border-coffee200 w-[319px] text-center gap-4 ' style={{boxShadow: '2px 2px 32px 0px rgba(255, 255, 255, 0.15)'}}>
                        <h4 className='text-white font-bold text-[24px]'>{item.title}</h4>
                        <p className='text-[20px] font-semibold text-gray300'>{item.tag}</p>
                        <p className='mt-8 text-gray200 px-[28px]'>{item.description}</p>
                    </div>
                    </div>
                </div>
                <LineSVG />
                <CircleSVG /><LineSVG />
                </>
            ))}
           <button className='absolute right-4 z-10 top-2/2 transform -translate-y-2/2' onClick={handleNext}><ArrowRightCircle size={44} /></button>
        </div>
    </div>
  )
}

