import Image from "next/image";
import React from "react";
import { YellowLineSVG } from "./svgs/YellowLineSVG";
import { Vector_1SVG } from "./svgs/Vector_1SVG";
import { MultiSquaresSVG } from "./svgs/MultiSquaresSVG";
import useObserver from "./useObserver";
import { TopSmallCircelStarSVG } from "./svgs/TopSmallCircelStarSVG";
import { BottomSmallCircelStarSVG } from "./svgs/BottomSmallCircelStarSVG";
import styles from "@/styles/SectionTwo.module.css";
const data = [
  {
    id: 1,
    title: "Bita Marketplace",
    img: "/bitamarketplace.png",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 2,
    title: "Bitadex",
    img: "/bitadex.png",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 3,
    title: "Bitabridge",
    img: "/bitabridge.png",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 4,
    title: "Bitapad",
    img: "/bitapad.png",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 5,
    title: "BitaLend",
    img: "/bitalend.png",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
];
export const SectionTwo = () => {
  const { sectionRef, animated } = useObserver();

  return (
    <div className={`py-36 relative bg-black100`}>
      <div
        ref={sectionRef}
        className={`${animated ? "animate-fadeInUp " : "bg-black100"}`}
      >
        <span className="absolute top-2/3  transform -translate-y-1/4 animate-float">
          <MultiSquaresSVG />
        </span>
        <div className="relative">
          <h4 className="font-[Kanit] text-[56px] text-center font-semibold ">
            Our <span className="text-yellow400">Products</span>
            <span className="absolute top-16 left-1/2 transform -translate-x-2/2">
              <Vector_1SVG />
            </span>
          </h4>
          <p className="font-[20px] text-center my-8">
            Pellentesque habitant morbi tristique senectus et netus et
            Pellentesque habitant morbi.
          </p>
        </div>
        <div className="mt-[60px] flex flex-wrap justify-center items-start content-start px-[64px] gap-x-[48px] gap-y-[60px]">
          {data.map((item, ind) => (
            <div
              key={ind}
              className={`flex flex-col justify-center items-center border-2 rounded-[12px] px-[24px] py-4 w-[314px] backdrop-blur-[13px] border-coffee200  ${styles.card}`}
            >
              <span className={`absolute top-0 left-0 ${styles.topIcon}`}>
                <TopSmallCircelStarSVG />
              </span>
              <Image
                src={item.img}
                width={159}
                height={159}
                className={`absolute top-0 ${styles.images}`}
                alt={item.title}
              />
              <h5 className="text-[20px] my-2 mt-36 font-semibold">
                {item.title}
              </h5>
              <YellowLineSVG />
              <p className="text-center my-2 text-gray200 mb-[56px]">
                {item.description}
              </p>
              <span
                className={`absolute bottom-0 right-0 ${styles.bottomIcon}`}
              >
                <BottomSmallCircelStarSVG />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
