import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex lg:flex-col lg:py-6 items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-1">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by Octivion
        </div>
        <div className="flex gap-2 divide-x-2 text-primary dark:text-primaryDark">
          <Link
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=rkkeepscode@gmail.com&body=Body&su=Subject"
            target="__blank"
          >
            rkflash22@gmail.com
          </Link>
          <p className="pl-2">+91-6387540764</p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
