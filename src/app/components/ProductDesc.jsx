"use client";
import Image from "next/image";
import { useState } from "react";

const ProductDesc = () => {
  const [quantity, setQuantity] = useState(0);

  const handleCart = () => {
    console.log("product added to cart");
  };

  return (
    <div className="p-5 lg:w-1/2">
      <p className="uppercase tracking-[4px] text-sm text-orange-400 font-bold">
        sneaker company
      </p>
      <h1 className="font-bold text-3xl my-3 lg:my-5 lg:text-4xl">
        Fall Limited Edition Sneaker
      </h1>
      <p className="text-sm text-slate-400 font-medium lg:text-base">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <div className="flex lg:flex-col lg:items-start justify-between my-3 lg:my-5 lg:gap-2">
        <div className="flexCenter gap-2">
          <p className="font-bold text-2xl">$125.00</p>
          <span className="bg-orange-100 text-orange-500 p-1 px-1.5 rounded-lg font-semibold text-sm">
            50 %
          </span>
        </div>
        <span className="line-through text-slate-400 text-sm font-bold">
          $250.00
        </span>
      </div>

      <div className="lg:flex lg:gap-5">
        <div className="flexBetween bg-slate-100 rounded-lg p-3 px-6 my-4 lg:w-1/3">
          <button
            onClick={() => quantity >= 1 && setQuantity(quantity - 1)}
            className="font-bold scale-150 text-orange-500"
          >
            <Image
              src={"/icon-minus.svg"}
              alt="plus"
              width={10}
              height={10}
              className=""
            />
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="font-bold scale-150 text-orange-500"
          >
            <Image src={"/icon-plus.svg"} alt="plus" width={10} height={10} />
          </button>
        </div>

        <div className="lg:w-2/3 flexCenter">
          <button className="w-full bg-orange-500 text-white font-bold py-3 gap-3 rounded-lg flexCenter hover:opacity-75 transition shadow-orange-200 shadow-lg drop-shadow-lg">
            <Image
              src={"/icon-cart-white.svg"}
              alt="cart"
              width={16}
              height={16}
              onClick={handleCart}
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
