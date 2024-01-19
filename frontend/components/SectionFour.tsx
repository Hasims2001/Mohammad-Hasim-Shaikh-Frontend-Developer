import React, { useEffect, useState } from 'react'
import { Vector_1SVG } from './svgs/Vector_1SVG'
import Image from 'next/image';
import { CardButton } from './CardButton';

interface CoinData {
    img: string;
    tokenName: string;
    symbol: string;
    decimals: number;
    marketcap: number;
    chain: string;
  }
export const SectionFour = () => {
    const [data, setData] = useState<CoinData[]>([]);
    const apiCall = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
          const data = await res.json();
          if(!data.issue){
            setData(data.data);
          }
        } catch (error) {
          console.error("something is wrong," + error);
        }
      }
      useEffect(()=>{
        apiCall();
      }, [])
  return (
    <div className='flex bg-black300 flex-col justify-center gap-8 items-center py-24 '>
        <div className='font-[Kanit] text-center'>
            <p className='text-[56px] font-semibold leading-[60px]'>Our <span className='text-yellow400'>Tokens</span></p>
            <p className='float-end'><Vector_1SVG /></p>
        </div>
            <p className='text-xl'>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
        <div className='my-12 grid grid-cols-3 gap-x-[48px] gap-y-[60px]'>
          {data.length > 0 && data.map((item, ind)=> (
            <div key={ind} className='flex flex-col min-w-[298px] px-[8px] bg-black200 py-10 backdrop-blur-md  rounded-[12px] border-[3px] border-coffee200'>
              <Image src={"/bitcoin.png"} width={100} height={100} alt='bitcoin' className='self-center'/>
              <div className='mt-10 px-[24px]'>
                <p className='text-lg  font-bold'>{item.tokenName}</p>
                
                <table className='mt-2'>
                  <tbody>
                  <tr>
                    <td className='font-medium w-[63%] text-gray200'>Symbol</td>
                    <td className='text-gray200'>{item.symbol}</td>
                  </tr>
                  <tr>
                    <td className='font-medium w-[63%] text-gray200'>Decimals</td>
                    <td  className='text-gray200'>{item.decimals}</td>
                  </tr>
                  <tr>
                    <td className='font-medium w-[63%] text-gray200'>Market Cap</td>
                    <td  className='text-gray200'>${item.marketcap}</td>
                  </tr>
                  <tr>
                    <td className='font-medium w-[63%] text-gray200'>Chain</td>
                    <td  className='text-gray200'>{item.chain}</td>
                  </tr>
                  </tbody>
                </table>
                
              </div>
              <span className='text-center mt-8 mx-[auto]'><CardButton values='Details' className='self-center' /></span>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center gap-12 text-black'>
          <button className='bg-white font-medium px-[14px] py-[8px] rounded-[8px]'>Previous</button>
          <p className='text-white text-[14px] font-medium'>Page 1 of 10</p>
          <button  className='bg-white font-medium px-[14px] py-[8px] rounded-[8px]'>Next</button>
        </div>
    </div>
  )
}
