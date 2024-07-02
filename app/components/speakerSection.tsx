import React from "react";
import Image from "next/image";
export default function SpeakerSection() {
  return (
     <div className="max-w-[1200px] m-auto flex mt-20 gap-10  flex-col-reverse lg:flex-row  min-h-[400px]  bg-black">
      <div className=" ml-10 gap-5">
        <p className=" text-[#00FF66] mt-10">categories</p>
        <h1 className=" flex flex-wrap mt-5  text-3xl font-bold text-white">
          Enhance Your Music Experience
        </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className=" bg-white   flex-col text-left text-black font-bold w-16 h-16 rounded-full">
          <h1 className=" ml-5">23</h1>
          <p className=" ml-2">Hours</p>
        </div>
        <div className=" bg-white   flex-col text-left text-black font-bold w-16 h-16 rounded-full">
          <h1 className=" ml-5">23</h1>
          <p className=" ml-2">Hours</p>
        </div>
        <div className=" bg-white   flex-col text-left text-black font-bold w-16 h-16 rounded-full">
          <h1 className=" ml-5">23</h1>
          <p className=" ml-2">Hours</p>
        </div>
        <div className=" bg-white   flex-col text-left text-black font-bold w-16 h-16 rounded-full">
          <h1 className=" ml-5">23</h1>
          <p className=" ml-2">Hours</p>
        </div>
      </div>
        <button className=" mt-10 ml-2 w-[100px] p-2 mb-5 bg-[#00FF66] text-white rounded  ">Buy Now </button>
      </div>
      <div>
        <Image className=" mt-10" src="/speaker.png" height={300} width={500 } alt="pic"></Image>
      </div>
    </div>
  );
}
