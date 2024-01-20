import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import { LogoSVG } from "./svgs/LogoSVG";
import { EmailSVG } from "./svgs/EmailSVG";
import { TwitterSVG } from "./svgs/TwitterSVG";
import { InstagramSVG } from "./svgs/InstagramSVG";
export default function Footer() {
  return (
    <div className="m-[auto] pt-72 bg-black300 relative">
      <Image
        src={"/world.png"}
        width={300}
        height={300}
        alt="world"
        className="absolute top-0 animate-float"
      />
      <div className={styles.container}>
        <p className="font-[Kanit] text-[44px] ">
          Join our <br></br>
          <span className="text-yellow400">Community</span>
        </p>
        <div className="flex justify-between gap-4">
          <div className={styles.icons}>
            <EmailSVG />
          </div>
          <div className={styles.icons}>
            <TwitterSVG />
          </div>
          <div className={styles.icons}>
            <InstagramSVG />
          </div>
        </div>
      </div>
      <div className="bg-coffee300 px-2 grid place-items-center gap-8 pt-32 pb-16">
        <LogoSVG width={146} height={146} />
        <p className="opacity-70 text-2xl">2023 All rights reserved</p>
      </div>
    </div>
  );
}
