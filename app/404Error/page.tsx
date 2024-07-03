"use client";
import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { TbUser } from "react-icons/tb";

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
export default function Error() {
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
      <div className=" max-w-[1200px] m-auto">
        <h1 className=" mt-10 mx-6">Home / 404 Error</h1>
        <div className=" text-center mt-20">
          <h1 className="text-9xl ">404 Not Found</h1>
          <p className=" mt-10">Your visited page not found. You may go home page.</p>
          <button className=" mt-10 bg-[#DB4444] text-white p-2 rounded h-12 w-[250px]">Back to the home page</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
