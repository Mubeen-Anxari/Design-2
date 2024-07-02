import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className=" flex  flex-col-reverse gap-5 lg:flex-row max-w-[1200px] m-auto mt-10   ">
      <div className=" ml-6 md:w-full">
        <div className="flex gap-8">
          <p>Womans Fashion</p>
          <PiGreaterThanBold className=" mt-1" />
        </div>
        <div className="flex gap-14 mt-2">
          <p>Mens Fashion</p>
          <PiGreaterThanBold className=" mt-1" />
        </div>
        <p className="mt-2">Electronics</p>
        <p className="mt-2">Home & Lifestyle</p>
        <p className="mt-2">Medicine</p>
        <p className="mt-2">Sports & Outdoor</p>
        <p className="mt-2">Babys & Toys</p>
        <p className="mt-2">Groceries & Pets</p>
        <p className="mt-2">Health & Beauty</p>
      </div>
      <div className=" bg-black flex">
        <div className=" w-[400px]">
          <div className=" flex mt-8 ml-5 ">
            <FaApple className="w-20 h-10 text-white" />
            <p className=" text-white mt-3">iPhone 14 Series</p>
          </div>
          <h3 className="text-4xl text-white w-[200px] ml-11 mt-4">
            Up to 10% off Voucher
          </h3>
          <div className="flex gap-2">
            <p className=" text-gray-400 underline ml-11 mt-6 ">Shop now</p>
            <FaArrowRight className=" text-gray-400 mt-7" />
          </div>
        </div>
        <div >
            <Image className="w-[500px] sm:w-full "    src="/iphone.png" height={350} width={500} alt="pic"></Image>
        </div>
      </div>
    </div>
  );
}
