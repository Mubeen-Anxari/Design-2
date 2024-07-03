"use client";
import React from "react";
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { TbUser } from "react-icons/tb";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { MdRadioButtonChecked } from "react-icons/md";

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
export default function Checkout() {
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
          <TbUser className=" h-6 w-6" />
        </div>
      </Navbar>
      <hr />
      <div className="max-w-[1200px] mx-2 m-auto ">
        <div className=" flex  mt-20">
          <p>Account /</p>
          <p>My Account /</p>
          <p>Product /</p>
          <p>View Cart /</p>
          <p>CheckOut /</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div className=" flex flex-col">
            <div>
              <h1 className=" text-3xl font-bold">Billing Details</h1>
              <div className=" flex flex-col gap-2 mt-6">
                <label className=" ">First Name*</label>
                <input
                  className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Company Name</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Street Address*</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Apartment, floor, etc. (optional)</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Town/City*</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Phone Number*</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <label className=" ">Email Address*</label>
              <input
                className=" bg-[#F5F5F5] p-2 lg:w-[400px]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex gap-2 mt-1">
              <IoCheckboxOutline className=" mt-1 bg-[#DB4444]" />
              <h1 className=" text-sm">
                Save this information for faster check-out next time
              </h1>
            </div>
          </div>

          <div className=" mt-[90px]">
            <div className=" flex justify-between">
              <div className=" flex gap-4">
                <Image
                  className=" h-10 w-10"
                  src="/pic1.png"
                  height={0}
                  width={0}
                  alt="pic"
                ></Image>
                <h1 className=" font-semibold">LCD Monitor</h1>
              </div>
              <h1 className=" font-semibold">$650</h1>
            </div>
            <div className=" flex mt-12 justify-between">
              <div className=" flex gap-4">
                <Image
                  className=" h-10 w-10"
                  src="/pic3.png"
                  height={0}
                  width={0}
                  alt="pic"
                ></Image>
                <h1 className=" font-semibold">LCD Monitor</h1>
              </div>
              <h1 className=" font-semibold">$650</h1>
            </div>
            <h1 className=" font-semibold mt-6">Subtotal</h1>
            <hr className=" mt-2" />
            <h1 className=" font-semibold mt-6">Shipping</h1>
            <hr className=" mt-2" />
            <div className=" mt-6 flex justify-between">
              <h1>Total:</h1>
              <h1>$760</h1>
            </div>
            <div className=" flex mt-6 justify-between">
              <div className=" flex gap-2">
                <FaRegCircle className=" h-6 w-6" />
                <h1>Bank</h1>
              </div>
              <div className=" flex gap-1">
                <Image
                  src="/image1.png "
                  height={46}
                  width={46}
                  alt="pic"
                ></Image>
                <Image
                  src="/Visa.png "
                  height={46}
                  width={46}
                  alt="pic"
                ></Image>
                <Image
                  src="/Mastercard.png "
                  height={46}
                  width={46}
                  alt="pic"
                ></Image>
                <Image
                  src="/Nagad.png "
                  height={46}
                  width={46}
                  alt="pic"
                ></Image>
              </div>
            </div>
              <div className=" flex mt-4 gap-4">
                <MdRadioButtonChecked className=" h-6 w-6" />
                <h1 className="font-semibold">Cash on delivery</h1>
              </div>
              <div className=" flex gap-6 mt-6 ">
                <h1 className=" text-[#000000] border p-2 w-[400px] border-black rounded">Coupon Code</h1>
                <h1  className=" bg-[#DB4444] text-center p-4 w-[300px] rounded text-white">Apply Coupon</h1>
              </div>
              <h1  className=" mt-6 bg-[#DB4444] text-center p-4 w-[200px] rounded text-white">Place Order</h1>
              

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
