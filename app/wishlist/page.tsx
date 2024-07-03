"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Card, CardHeader, CardBody, divider } from "@nextui-org/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function App() {
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
     <div className="flex  flex-wrap gap-1 bg-black justify-center items-center">
        <h1 className=" text-center text-xs md:text-sm  text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <h2 className=" text-center  text-base text-white md:text-base underline">
        ShopNow
        </h2>
      </div>
      <Navbar className=" max-w-[1200px] m-auto" maxWidth="full">
        <NavbarContent className="md:hidden">
          <NavbarMenuToggle
            icon={<RxHamburgerMenu color="black" size={25} />}
          />
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
              base: "hidden md:flex h-10 w-[577px] md:w-full",
              mainWrapper: "h-full",
              input: "text-small bg-[#F5F5F5]",
              inputWrapper:
                "h-full  font-normal bg-primaryColor text-default-500 ",
            }}
            placeholder="What are you looking for......?"
            size="sm"
            startContent={<IoIosSearch className=" text-textColor" />}
            type="search"
          />
          <div className=" flex gap-5">
            <FaRegHeart className="w-8 h-6" />
            <BsCart3 className="w-8 h-6" />
            <FiUser className="w-8 h-6" />
          </div>{" "}
        </NavbarContent>
        <NavbarMenu className=" bg-primaryColor pt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <hr />
      <div className=" max-w-[1200px] m-auto">
        <div className=" mt-10 flex justify-between">
          <h1 className="text-sm font-normal ml-6">Wishlist (4)</h1>
          <p className=" border p-2 mb-4 rounded-lg text-sm font-normal">
            Move All To Bag
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {products?.map((item,index) => {
            return (
              <div key={index}>
                <Card className="py-4 min-h-[320px] rounded-none bg-[#F5F5F5]">
                  <div className=" flex  justify-between mr-3">
                    <p className=" bg-[#DB4444] text-center rounded ml-3  text-white p-1 w-16 h-8">
                      -35%
                    </p>
                    <RiDeleteBin6Fill className=" bg-white rounded-full h-10 w-6" />
                  </div>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl "
                      src={item?.image}
                      height={40}
                      width={150}
                    />
                  </CardBody>
                  <div className=" flex justify-center p-1 rounded bg-black gap-2">
                    <AiOutlineShoppingCart className=" h-6 w-6 text-white" />
                    <h1 className=" text-white">Add to cart</h1>
                  </div>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      {item?.title}
                    </p>
                    <small className=" text-[#DB4444]">{item?.price}</small>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
        <div className=" max-w-[1200px] m-auto">
          <div className=" flex  justify-between gap-2  mt-10 ">
            <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
            <p className=" md:w-full mt-1 ">Just Foryou</p>
            <p className=" font-normal border p-2 w-[100px] text-center rounded">
              See all
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {products?.map((item,index) => {
            return (
              <div key={index}>
                <Card className="py-4  min-h-[320px] rounded-none bg-[#F5F5F5]">
                  <div className=" flex  justify-between mr-3">
                    <p className=" bg-[#DB4444] text-center rounded ml-3  text-white p-1 w-16 h-8">
                      -35%
                    </p>
                    <RiDeleteBin6Fill className=" bg-white rounded-full h-10 w-6" />
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
                    <AiOutlineShoppingCart className=" h-6 w-6 text-white" />
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
