"use client";
import React from "react";
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { TbUser } from "react-icons/tb";
import { Card, CardHeader, CardBody } from "@nextui-org/react";


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
export default function DetailPage() {
    const products = [
        {
          image: "/bag.png",
          title: "Gucci duffle bag",
          price: `$960`,
          id: 1,
        },
        {
          image: "/radio.png",
          title: "RGB liquid CPU Cooler",
          price: `$1960`,
          id: 2,
        },
        {
          image: "/game.png",
          title: "GP11 Shooter USB Gamepad",
          price: `$1760`,
          id: 3,
        },
        {
          image: "/jacket.png",
          title: "Quilted Satin Jacket",
          price: `$9060`,
          id: 4,
        },
      ];
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-1 bg-black justify-center items-center">
        <h1 className=" text-center text-xs md:text-sm  text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <h2 className=" text-center  text-base text-white md:text-base underline">
          ShopNow
        </h2>
      </div>
      <Navbar className=" max-w-[1200px] m-auto" maxWidth="full">
        <NavbarContent className="md:hidden">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="md:hidden" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="start">
          <NavbarBrand className="mr-4">
            <Logo />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-5">
            <NavbarItem className=" flex gap-1 ">Home</NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Contact
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Sign up
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "hidden md:flex h-10 sm:w-full md:w-[377px] ",
              mainWrapper: "h-full",
              input: "text-small  bg-[#F5F5F5]",
              inputWrapper:
                "h-full  font-normal bg-primaryColor rounded-xl text-default-500 ",
            }}
            placeholder="What are you looking for......?"
            size="sm"
            type="search"
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <div className=" flex gap-2">
          <PiShoppingCart className=" h-6 w-6" />
          <PiHeartStraight className=" h-6 w-6" />
          <TbUser className="  rounded-full  h-6 w-6" />
        </div>
      </Navbar>
      <div className=" max-w-[1200px] m-auto">
        <h1 className=" mt-10 mx-6">
          Account / Gaming / Product  Havic HV G-92 Gamepad View Cart
        </h1>
       <div className=" flex flex-col lg:flex-row gap-10 ">
       <div className=" flex gap-2  flex-col-reverse lg:flex-row ">
            <div className=" flex flex-wrap justify-center gap-4 mx-5 mt-10 lg:flex-col flex-row  ">
                <Image className=" bg-[#F5F5F5] p-2 rounded " src='/image 57.png' height={100} width={150} alt="pic"></Image>
                <Image className=" bg-[#F5F5F5] p-2 rounded " src='/image 58.png' height={100} width={150} alt="pic"></Image>
                <Image className=" bg-[#F5F5F5] p-2 rounded " src='/image 59.png' height={100} width={150} alt="pic"></Image>
                <Image className=" bg-[#F5F5F5] p-2 rounded " src='/image 61.png' height={100} width={150} alt="pic"></Image>
            </div>
            <div className="bg-[#F5F5F5] mt-10  p-2 rounded h-[565px] ">
            <Image className=" mt-20" src='/image 63.png' height={10} width={550} alt="pic"></Image>
            </div>
        </div>
        <div className=" flex flex-col mt-10 justify-center mx-2">
            <h1 className=" text-xl font-bold">Havic HV G-92 Gamepad</h1>
            <div className=" flex gap-1 mt-2">
                <Image src='/stars.png' height={10} width={60} alt="pic"></Image>
                <h1>(150 Reviews)</h1>
                <h1 className=" text-[#00FF66]">In Stock</h1>
            </div>
            <h1 className=" font-semibold mt-8">$192.00</h1>
            <p className=" mt-10 w-[400px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <hr className=" mt-6" />
            <div className=" flex gap-4 mt-4">
                <h1>Colours:</h1>
                <div className=" flex gap-2 mt-1">
                    <div className="border border-black rounded-full h-4 w-4 bg-red-400"></div>
                    <div className="border border-black rounded-full h-4 w-4 bg-blue-400"></div>
                </div>
            </div>
            <div className=" flex gap-4 mt-6">
                <h1 className=" mt-1">Size:</h1>
                <h1 className=" border  p-1 text-center rounded w-10">XS</h1>
                <h1 className=" border  p-1 text-center rounded w-10">S</h1>
                <h1 className=" border  p-1 bg-red-500 text-white text-center rounded w-10">M</h1>
                <h1 className=" border  p-1 text-center rounded w-10">L</h1>
                <h1 className=" border  p-1 text-center rounded w-10">XL</h1>
            </div>
            <div className=" flex gap-3 mt-8 ">
                <div className=" flex border  w-[150px]  justify-between p-1 rounded">
                    <h1>-</h1>
                    <h1>2</h1>
                    <h1 className=" bg-red-500 rounded w-6 h-6 text-center text-white">+</h1>
                </div>
                <button className=" text-white bg-red-500 p-1 rounded w-[150px]">Buy now</button>
                <PiHeartStraight className=" border p-1 h-10 w-10 rounded" />
            </div>
            <div className=" flex flex-col border justify-center p-2 mt-6 rounded">
                <Image  src='/Frame 915.png' height={300} width={300 } alt="pic"></Image>
                <hr className=" mt-2" />
                <Image src='/Frame 915.png' height={300} width={300 } alt="pic "></Image>
            </div>
        </div>
       </div>
       <div className=" grid grid-cols-1 mx-5 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {products?.map((item,index) => {
            return (
              <div key={index}>
                <Card className="py-4  min-h-[320px] rounded-none bg-[#F5F5F5]">
                  <div className=" flex  justify-between mr-3">
                    <p className=" bg-[#DB4444] text-center rounded ml-3  text-white p-1 w-16 h-8">
                      -35%
                    </p>
                  </div>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover flex justify-center items-center rounded-xl "
                      src={item?.image}
                      height={40}
                      width={150}
                    />
                  </CardBody>
                  <div className=" flex justify-center p-1 rounded bg-black gap-2">
                    <h1 className=" text-white">Add to cart</h1>
                  </div>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      {item?.title}
                    </p>
                    <small className=" text-[#DB4444]">{item?.price}</small>
                    <Image
                      src="/Fivestar.png"
                      height={10}
                      width={100}
                      alt="pic"
                    ></Image>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>        
      </div>
      <Footer/>
    </div>
  );
}
