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
    image: "/pic2.png",
    title: "S-Series Comfort Chair ",
    price: `$375`,
  },
  {
    image: "/pic3.png",
    title: "IPS LCD Gaming Monitor",
    price: `$370`,
  },
];
export default function OurProducts() {
  return (
    <div className=" max-w-[1200px] m-auto">
      <div className=" flex justify-between">
        <h1 className=" ml-5 mt-10 text-2xl font-bold">Explore our products</h1>
        <div className=" flex gap-4 mt-2">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
      <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {products?.map((item,index) => {
          return (
            <div key={index}>
              <Card className="py-4 bg-[#F5F5F5]">
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
    </div>
  );
}
