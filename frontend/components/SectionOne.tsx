import React, { useEffect, useRef, useState } from "react";
import { Vector_1SVG } from "./svgs/Vector_1SVG";
import { GatewaySVG } from "./svgs/GatewaySVG";
import { CardButton } from "./CardButton";
import Image from "next/image";
import { SmallStarSVG } from "./svgs/SmallStarSVG";
import { HalfStarSVG } from "./svgs/HalfStarSVG";
import { CircleStarSVG } from "./svgs/CircleStarSVG";
import useObserver from "./useObserver";

export const SectionOne = () => {
  const { sectionRef, animated } = useObserver();

  return (
    <div className="text-center pt-60 pb-12">
      <div className="grid place-items-center relative ">
        <Image
          src={"/colframe.png"}
          className="z-1 absolute"
          width={1000}
          height={1000}
          alt="frame"
        />
        <Image
          src={"/rowframe.png"}
          className="z-1 absolute"
          width={1000}
          height={1000}
          alt="frame"
        />
        <span className="animate-bounceInLeft">
          <GatewaySVG />
        </span>
        <span className="absolute left-[511px] animate-fadeIn top-[5vh]">
          <HalfStarSVG />
        </span>
        <span className="absolute right-[384px] animate-fadeIn top-4">
          <SmallStarSVG />
        </span>
        <div className="flex  gap-4 text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem] ">
          <p className="text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem] relative z-10 animate-bounceInRight">
            DeFi on{" "}
          </p>
          <span className="absolute left-[297px] bottom-12 z-10 animate-bounceInRight">
            <SmallStarSVG />
          </span>
          <p className="text-yellow400 relative z-0 animate-bounceInRight">
            Bitcoin
          </p>
          <span className="absolute top-[300px] z-1 right-[300px] animate-bounceInRight">
            <Vector_1SVG />
          </span>
        </div>
        <Image
          src={"/bithouse.png"}
          className="z-1 absolute top-[-15px] animate-bounceInUp"
          width={324}
          height={324}
          alt="bithouse"
        />
        <span className="animate-floatingBounce absolute right-60 top-2 ">
          <CircleStarSVG />
        </span>
      </div>
      <div
        ref={sectionRef}
        className={`flex flex-col z-22 gap-[40px] pt-16 items-center ${
          animated ? " animate-fadeInUp " : "invisible"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin <br></br> eleifend id mauris. Amet sem in id eget nunc
          quam lacus tellus augue.
        </p>
        <span>
          <CardButton values="Get Started" className="" />
        </span>
      </div>
      <Image
        src={"/7.png"}
        className="absolute z-10 right-0 top-[520px] animate-float"
        width={250}
        height={250}
        alt="star"
      />
    </div>
  );
};
