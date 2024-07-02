import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const products = [
  {
    image: "/pic1.png",
    title: "HAVIT HV-G92 Gamepad",
    price: `$125`,
  },
  {
    image: "/pic4.png",
    title: "AK-900 Wired Keyboard",
    price: `$960`,
  },
  {
    image: "/pic3.png",
    title: "IPS LCD Gaming Monitor",
    price: `$370`,
  },
  {
    image: "/pic2.png",
    title: "S-Series Comfort Chair ",
    price: `$375`,
  },
];
export default function ProductsSection() {
  return (
    <div className=" max-w-[1200px] m-auto ">
      <div className=" md:w-full">
        <div className=" flex  justify-between">
          <div className=" flex flex-wrap    gap-40 ">
            <div>
              <h1 className=" ml-5 mt-2 text-2xl font-bold">Flash Sales</h1>
            </div>
            <div className=" flex text-center  gap-4 ">
              <div className="  ml-10">
                <p className=" font-bold">Days</p>
                <h1 className="text-2xl font-bold">03</h1>
              </div>
              <div>
                <p className=" font-bold">Hours</p>
                <h1 className="text-2xl font-bold">23</h1>
              </div>
              <div>
                <p className=" font-bold">Minutes</p>
                <h1 className="text-2xl font-bold">19</h1>
              </div>
              <div>
                <p className=" font-bold">Seconds</p>
                <h1 className="text-2xl font-bold">56</h1>
              </div>
            </div>
          </div>
          <div className=" flex gap-4 mt-2">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 mt-10">
        {products?.map((item) => {
          return (
            <div >
              <Card className="py-4  m-auto    bg-[#F5F5F5]">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item?.image}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{item?.title}</p>
                  <small className=" text-red-600">{item?.price}</small>
                </CardHeader>
             
              </Card>
            </div>
          );
        })}
      </div>
      <div className="  text-center">
        <button className=" mt-10 bg-red-500 text-white p-2 rounded">
          Veiw All Products
        </button>
      </div>
      <hr className=" mt-10" />
    </div>
  );
}
