"use client";
import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { TbUser } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

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
export default function Contact() {
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
      <hr />
      <div className="max-w-[1200px] m-auto ">
        <h1 className=" mx-5 mt-10">Home / Conatct</h1>
        <div className="flex flex-col lg:flex-row  gap-10">
          <div className=" flex w-full lg:w-[350px] flex-col gap-6 shadow-lg p-6 mt-20">
            <div className=" flex mt-6 gap-6">
              <IoCallOutline className=" bg-[#DB4444] text-white rounded-full h-6 w-6 p-1" />
              <h1 className=" font-semibold">Call To Us</h1>
            </div>
            <h1 className=" font-semibold">
              We are available 24/7, 7 days a week.
            </h1>
            <h1 className=" font-semibold">Phone: +8801611112222</h1>
            <hr className=" mt-6" />
            <div className=" flex gap-4">
              <MdOutlineMailOutline className=" bg-[#DB4444] text-white rounded-full h-6 w-6 p-1" />
              <h1 className=" font-semibold">Write To US</h1>
            </div>
            <p className=" mt-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className=" mt-2">Emails: customer@exclusive.com</p>
            <p className=" mt-2">Emails: support@exclusive.com</p>
          </div>
          <div className=" flex w-full lg:w-[800px] flex-col gap-6 shadow-lg p-6 mt-20">
            <div className=" flex flex-wrap gap-4">
              <input
                className=" w-full lg:w-[237px] bg-[#F5F5F5] p-2  rounded"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="w-full lg:w-[237px] bg-[#F5F5F5] p-2  rounded"
                type="text"
                placeholder="Your Email *"
              />
              <input
                className="w-full lg:w-[237px] bg-[#F5F5F5] p-2  rounded"
                type="text"
                placeholder="Your Phone *"
              />
            </div>
            <div>
              <p  className="bg-[#F5F5F5] text-gray-400  w-full  lg:w-[741px]  h-[200px] rounded p-2">Your Message</p>
            </div>
            <div className=" flex justify-end p-3">
                <button className="p-2 rounded bg-[#DB4444] text-white">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
