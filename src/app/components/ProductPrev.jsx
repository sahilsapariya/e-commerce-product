"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCT_IMAGES, PRODUCT_THUBNAILS } from "../constants";

const ProductPrev = () => {
  return (
    <div className="lg:w-1/2">
      <div className="hidden lg:block">
        <DesktopView />
      </div>
      <div className="lg:hidden">
        <MobileView />
      </div>
    </div>
  );
};

const DesktopView = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={PRODUCT_IMAGES[selectedImage].src}
        alt={PRODUCT_IMAGES[selectedImage].alt}
        width={300}
        height={300}
        className="rounded-lg mb-5 w-full h-full max-w-[360px]"
      />

      <ul className="flex gap-5">
        {PRODUCT_THUBNAILS.map((thumbnail, index) => {
          return (
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={75}
              height={75}
              key={index}
              className={`rounded-lg ${
                selectedImage === index
                  ? "border-2 border-orange-500 p-[1px] opacity-70"
                  : ""
              }`}
              onClick={() => setSelectedImage(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

const MobileView = () => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar h-[300px] max-w-[600px] mx-auto">
      {PRODUCT_IMAGES.map((image, index) => {
        return (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover h-full w-full"
              style={{ minWidth: "100%" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductPrev;
