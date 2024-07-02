import React from "react";
import { buttonTypes } from "../types/componentsType";

export default function TextSection(props:buttonTypes) {
  return (
    <div className=" max-w-[1200px] m-auto">
      <div className=" flex gap-2 mt-10 ml-6">
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <p className=" md:w-full mt-1 text-[#DB4444]">{props.title}</p>
      </div>
    </div>
  );
}
