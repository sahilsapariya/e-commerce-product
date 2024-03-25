"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <nav className="max-container flexBetween padding-container relative z-30 py-4 lg:border-b-5 lg:border-b">
        <div className="flexBetween gap-4 lg:gap-20">
          <Image
            className="lg:hidden cursor-pointer inline-block"
            src={"/icon-menu.svg"}
            alt="menu"
            height={16}
            width={16}
            onClick={() => setIsNavActive(!isNavActive)}
          />

          <Link href="/">
            <Image src="/logo.svg" alt="logo" height={0} width={130} />
          </Link>
          <ul className="hidden h-full gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-slate-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flexBetween gap-5 lg:gap-10">
          <Image
            src={"/icon-cart.svg"}
            alt="cart"
            height={24}
            width={24}
            className="cursor-pointer"
          />
          <Image
            src={"/image-avatar.png"}
            alt="cart"
            height={28}
            width={28}
            className="lg:w-12 lg:h-12"
          />
        </div>
      </nav>
      {isNavActive && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-50 lg:hidden"></div>

          <div
            className={`lg:hidden fixed top-0 left-0 h-full w-2/3 md:w-1/3 bg-white z-50 transform transition-transform ${
              isNavActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              className="m-5 absolute top-0 left-0 cursor-pointer z-100 text-black"
              src={"/icon-close.svg"}
              alt="close"
              height={16}
              width={16}
              onClick={() => setIsNavActive(!isNavActive)}
            />
            <div className="p-6 mt-16">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.key} className="py-2">
                    <Link
                      href={link.href}
                      className="font-bold"
                      onClick={() => setIsNavActive(!isNavActive)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
