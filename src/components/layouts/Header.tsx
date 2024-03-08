/* eslint-disable @next/next/no-img-element */
"use client";
import {
  LEFT_HEADER_DATA,
  RIGHT_HEADER_DATA,
  getStaticURL,
} from "@/untils/constants";
import Link from "next/link";
import * as React from "react";

export const Header = () => {
  const [isHover, setIsHover] = React.useState<boolean>();

  return (
    <div
      id="header"
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center h-[106px] px-14"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="flex gap-8">
        {LEFT_HEADER_DATA.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-lg text-white font-bold z-50"
            onMouseMove={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href={"/"}>
        <img
          src={`/assets/images/Logo.svg`}
          alt="Logo"
          className=""
        />
      </Link>
      <div className="flex gap-8">
        {RIGHT_HEADER_DATA.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-lg text-white font-bold"
            onMouseMove={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

// export default Header;
