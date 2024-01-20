import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { LogoSVG } from "./svgs/LogoSVG";
const navigations = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/products",
    title: "Our Products",
  },
  {
    link: "/token",
    title: "Token Utility",
  },
  {
    link: "/roadmap",
    title: "Roadmap",
  },
];
export default function Navbar() {
  return (
    <div className={styles.nav_container}>
      <Link href={"/"}>
        <div className="flex gap-2">
          <LogoSVG />
          <div className="flex flex-col justify-center">
            <p className="text-yellow200 font-bold tracking-[0.16rem]">
              BITVERSE
            </p>
            <p className="text-white font-bold text-[0.54rem] tracking-[0.63rem]">
              FINANCE
            </p>
          </div>
        </div>
      </Link>
      <div className="flex justify-between gap-2.5 items-center">
        {navigations.map((item, ind) => (
          <Link href={item.link} key={ind} className="px-[24px] py-[16px]">
            {item.title}
          </Link>
        ))}
        <button className="bg-yellow300 text-black rounded-[0.625rem] px-4 py-2 text-lg">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
