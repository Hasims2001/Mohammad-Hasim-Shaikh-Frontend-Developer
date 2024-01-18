import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { SquareSVG } from "@/components/svgs/SquareSVG";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="rotate-[2.824deg] absolute top-0 ">
       <SquareSVG />
      </div>
      <div className="grid place-items-center min-h-screen">
        <Image src={"/gateway.svg"} alt="gate way" width={719} height={184} />
        {/* <Image src={"/bit.png"} alt='bithouse' width={324} height={324}  /> */}
        <p className="text-white font-bold uppercase font-[Kanit] text-[6.25rem] font-semibold leading-[9rem]">
          DeFi on <span className="text-yellow400">Bitcoin</span>
        </p>
        <Image
          src={"/vector_1.svg"}
          className="relative left-[17.8rem] top-[-7.5rem]"
          alt="underline"
          width={176}
          height={6}
        />
      </div>
    </Layout>
  );
}
