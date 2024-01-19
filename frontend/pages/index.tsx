import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { SquareSVG } from "@/components/svgs/SquareSVG";
import { SectionFour } from "@/components/SectionFour";
import { SectionThree } from "@/components/SectionThree";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="rotate-[2.824deg] absolute top-0 ">
       <SquareSVG />
      </div>
      <SectionThree />
      <SectionFour  />
    </Layout>
  );
}
