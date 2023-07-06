import React from "react";
// import { CircularText } from "./Icons";
import circular from "../../public/images/circular-text.png";
import circular1 from "../../public/images/circular-text1.png";
import Image from "next/image";
import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute ">
      <div className="w-48 md:w-32 h-auto flex items-center justify-center relative">
        {/* <Image
          src={circular}
          alt="asdf"
          className="animate-spin-slow dark:hidden"
        />
        <Image
          src={circular}
          alt="asdf"
          className="animate-spin-slow hidden dark:block"
        /> */}
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:abcd@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
