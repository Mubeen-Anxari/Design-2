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
  Button,
  Input,
} from "@nextui-org/react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
export default function Account() {
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
          <TbUser className=" bg-[#DB4444] rounded-full  text-white p-1 h-6 w-6" />
        </div>
      </Navbar>
      <hr />
      <div className=" max-w-[1200px] m-auto  ">
        <div className=" flex justify-between mx-5 mt-10">
          <h1>Home / My Account</h1>
          <div  className=" flex ">
            <h1>Welcome!</h1>
            <h1 className=" text-[#DB4444]">Md Rimel</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-5 lg:grid-cols-2">
          <div className=" mt-20 ">
            <h1 className=" font-bold">Manage My Account</h1>
            <div className=" mt-6 ml-6 flex flex-col gap-2">
              <h1 className=" text-[#DB4444]">My Profile</h1>
              <h1 className="text-[#000000]">Address Book</h1>
              <h1 className="text-[#000000]">My Payment Options</h1>
            </div>
            <h1 className=" mt-6 font-bold">My Orders</h1>
            <div className=" mt-5 ml-6 flex flex-col gap-2">
            <h1 className="text-[#000000]">My Returns</h1>
            <h1 className="text-[#000000]">My Cancellations</h1>
            </div>
            <h1 className=" font-bold mt-5">My WishList</h1>
          </div>
          <div className=" p-6 mt-20 shadow-lg">
            <h1 className=" text-[#DB4444]"> Edit Your Profile</h1>
            <div className=" grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex flex-col gap-2 mt-4">
              <h1 className=" ">First Name</h1>
              <input className=" p-2  w-full lg:w-[250px] bg-[#F5F5F5]" type="text" placeholder="Md  " />
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <h1 className=" ">Last Name</h1>
              <input className=" p-2  w-full lg:w-[250px] bg-[#F5F5F5]" type="text" placeholder="Rimel     " />
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <h1 className=" ">Email</h1>
              <input className=" p-2 w-full lg:w-[250px] bg-[#F5F5F5]" type="text" placeholder="rimel1111@gmail.com  " />
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <h1 className=" ">Address</h1>
              <input className=" p-2  w-full lg:w-[250px] bg-[#F5F5F5]" type="text" placeholder="Kingston, 5236, United State  " />
            </div>
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <h1 className=" ">Password Changes</h1>
              <input className=" p-2 w-full lg:w-[516px] bg-[#F5F5F5]" type="text" placeholder="Current Passwod  " />
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <input className=" p-2 w-full lg:w-[516px] bg-[#F5F5F5]" type="text" placeholder="New Passowrd  " />
            </div>
            <div className=" flex flex-col gap-2 mt-4">
              <input className=" p-2 w-full lg:w-[516px]  bg-[#F5F5F5]" type="text" placeholder="Confirm New Passowrd " />
            </div>
            <div className="flex gap-3 mt-4 justify-end mr-4">
              <h1 className=" mt-2">Cancel</h1>
              <button className=" p-2 w-[200px] rounded bg-[#DB4444] text-white">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
