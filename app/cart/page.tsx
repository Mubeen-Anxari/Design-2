"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Card, CardHeader, CardBody, divider } from "@nextui-org/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
export default function Cart() {
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
      <hr className=" text-black" />
      <div className="max-w-[1200px] m-auto">
        <p className=" ml-5 font-normal mt-14">Home/Cart</p>
        <div className=" flex  mt-10 shadow p-5 justify-between ">
          <h1>Products</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Subtotal</h1>
        </div>
        <div className=" grid grid-cols-1  lg:grid-cols-4 shadow gap-4 p-3 mt-10">
          <div className="  flex flex-wrap gap-3 ">
            <Image src="/pic3.png" height={10} width={50} alt="pic"></Image>
            <h1 className=" mt-2">LCD Moniter</h1>
          </div>
          <div>
            <h1>$650</h1>
          </div>
          <div className=" flex  w-[60px]  gap-2 border p-2">
            <h1 className=" font-[poppins] mt-1">01</h1>
            <div className=" flex flex-col">
              <FaAngleUp />
              <FaAngleDown />
            </div>
          </div>
          <h1 className=" ">$650</h1>
        </div>
        <div className=" grid grid-cols-1 gap-4  lg:grid-cols-4 p-3  mt-10">
          <div className="  flex    gap-3 ">
            <Image src="/pic1.png" height={10} width={50} alt="pic"></Image>
            <h1 className=" mt-2">LCD Moniter</h1>
          </div>
          <div className=" ">
            <h1>$550</h1>
          </div>
          <div className=" flex w-[60px]  gap-2 border p-2">
            <h1 className=" font-[poppins] mt-1">02</h1>
            <div className=" flex flex-col">
              <FaAngleUp />
              <FaAngleDown />
            </div>
          </div>
          <h1 className=" ">$1100</h1>
        </div>
        <div className=" mb-5 flex  flex-wrap gap-2 justify-center lg:justify-between mt-5">
          <h1 className=" text-center p-2 border w-[180px]">Return To Shop</h1>
          <h1 className=" text-center p-2 border w-[180px]">Update Cart</h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-wrap mb-3 lg:flex justify-center mt-10 h-[50px]   gap-2">
            <h1 className="  text-center w-[180px] border p-2  rounded">Coupon Code</h1>
            <h1 className=" border  text-center w-[180px] p-2 rounded bg-[#DB4444] text-white">
              Apply Coupon
            </h1>
          </div>
          <div className=" border w-[400px] mt-10  mx-3  border-black   rounded">
            <div className=" mt-5 mx-5 ">
              <h1 className=" text-base font-normal">Cart Total</h1>
              <div className=" mt-5 flex justify-between">
                <h1>Subtotal</h1>
                <h1>$1750</h1>
              </div>
              <hr className=" mt-2 " />
              <div className=" mt-5 flex justify-between">
                <h1>Shipping</h1>
                <h1>Free</h1>
              </div>
              <hr className=" mt-2" />
              <div className=" mt-5 flex justify-between">
                <h1>Total:</h1>
                <h1>$1750</h1>
              </div>
              <div className=" flex justify-center mt-3">
                <button className="bg-[#DB4444] mb-4 p-2 rounded text-white">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
