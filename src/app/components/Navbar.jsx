"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [cart, setCart] = useState([
    {
      src: "/image-product-1.jpg",
      alt: "Product 1",
      name: "Fall Limited Edition Sneaker",
      price: 125.0,
      quantity: 1,
    },
  ]);

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
          <div className="relative">
            <Image
              src={"/icon-cart.svg"}
              alt="cart"
              height={24}
              width={24}
              className="cursor-pointer"
              onClick={() => setIsCartActive(!isCartActive)}
            />
            {cart && (
              <span className="absolute top-[-8px] right-[-10px] text-[10px] cursor-pointer bg-orange-500 py-[1px] px-2 rounded-full text-white">
                {cart?.length}
              </span>
            )}
          </div>

          <Image
            src={"/image-avatar.png"}
            alt="cart"
            height={28}
            width={28}
            className="lg:w-12 lg:h-12"
          />
        </div>
      </nav>
      {isCartActive && (
        <div className="w-[min(calc(100%-32px),350px)] right-0 lg:top-[50px] z-50 lg:right-10 absolute bg-white rounded-lg m-3 shadow-slate-400 shadow-lg drop-shadow-xl">
          <div className="pb-2 p-5 border-b-2">
            <h3 className="font-bold">Cart</h3>
          </div>
          <div className="min-h-[200px] flexCenter">
            {!cart ? (
              <p className="text-slate-500 font-semibold">
                Your cart is empty.
              </p>
            ) : (
              <div className="flex-col">
                {cart?.map((item, index) => {
                  return (
                    <div key={index} className="flex flexBetween gap-3">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        className="rounded-sm"
                        height={50}
                        width={50}
                      />
                      <div>
                        <p className="text-sm text-slate-500">{item.name}</p>
                        <p className="text-sm text-slate-500">
                          ${item.price} x {item.quantity}{"  "}
                          <span className="text-black text-base font-semibold">
                            ${item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                      <Image
                        src={"/icon-delete.svg"}
                        alt="delete"
                        height={16}
                        width={16}
                        className="cursor-pointer"
                      />
                    </div>
                  );
                })}
                <button className="w-full bg-orange-500 my-4 text-white font-bold py-3 gap-3 rounded-lg flexCenter hover:opacity-75 transition shadow-orange-200 shadow-lg drop-shadow-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
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
