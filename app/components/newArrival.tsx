import React from "react";
import Image from "next/image";
export default function NewArrival() {
  return (
    <div className=" max-w-[1200px] m-auto ">
      <h1 className=" font-bold text-2xl ml-5 mt-5">New Arrival </h1>
      <div className="mx-5   mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
        <div >
          <Image src="/Frame1.png" height={600} width={570} alt="pic"></Image>
        </div>
        <div>
          <div>
            <Image src="/Frame2.png" height={280} width={570} alt="pic"></Image>
          </div>
          <div className=" flex gap-5 mt-5">
            <div>
              <Image
                src="/Frame3.png"
                height={320}
                width={570}
                alt="pic"
              ></Image>
            </div>
            <div>
              <Image
                src="/Frame4.png"
                height={320}
                width={570}
                alt="pic"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
