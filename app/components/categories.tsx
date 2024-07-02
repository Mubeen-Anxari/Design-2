import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const categories = [
  {
    image: "/phone.png",
    title: "Phone",
  },
  {
    image: "/computer.png",
    title: "Computers",
  },
  {
    image: "/smartWatch.png",
    title: "SmartWatch",
  },
  {
    image: "/camera.png",
    title: "Camera",
  },
  {
    image: "/headphone.png",
    title: "HeadPhones",
  },
  {
    image: "/gamepad.png",
    title: "Gaming",
  },
];
export default function Categories() {
  return (
    <div className=" max-w-[1200px] m-auto">
        <div className=" flex justify-between ">
            <h1 className=" ml-5 text-2xl font-bold">Browse By Category</h1>
            <div className=" flex gap-4 mt-2">
            <FaArrowLeft />
            <FaArrowRight />
            </div>
      </div>
      <span className=" flex flex-col lg:flex-row justify-between items-center ml-5 mt-10 gap-10">
        {categories?.map((item) => {
          return (
            <div className=" border rounded w-[120px] ">
              <Image
                src={item?.image}
                height={100}
                width={100}
                alt="pic"
              ></Image>
              <p className=" ml-5">{item?.title}</p>
            </div>  
          );
        })}
      </span>
      <hr className=" mt-10" />
    </div>
  );
}
