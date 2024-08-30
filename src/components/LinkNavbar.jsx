"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

import accout from "../../public/image/accout.jpeg";
import Image from 'next/image';

export default function LinkNavbar() {
  const navLinks = [
    { id: 2, name: "الرعاة", hash: "#about" },
    { id: 4, name: "محاسبة", hash: "#coupons" },
    { id: 3, name: "تقنية معلومات", hash: "#offer" },
  
  ];

  const [activeSection, setactiveSection] = useState("الرئيسية");

  return (
    <div className=" nav_links flex gap-4 md:gap-16 flex-1 items-center justify-end md:me-28 ">
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.hash}
            onClick={() => setactiveSection(link.name)}
          >
            <h1
              className={clsx(
                "transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-[20px] md:text-xl duration-300 text-sm sm:text-xl font-bold  hover:text-primary__color text-black",
                {
                  "text-primary__color  ":
                    activeSection == link.name,
                }
              )}
            >
              {link.name}
            </h1>
          </Link>
        );
      })}
         <Image src={accout} width={100}
             height={100} alt='sdad'/>
    </div>
  );
}
