"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
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
export default function App() {
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
      </Navbar>
      <div className=" flex flex-col lg:flex-row ">
        <div>
          <Image src="/cart.png" height={200} width={580} alt="pic"></Image>
        </div>
        <div className="mt-10 ml-10 ">
          <h1 className=" text-4xl font-bold">Create an account</h1>
          <p className=" text-base mt-6 ml-1 font-bold">
            Enter your details below
          </p>
          <h1 className="text-[#000000] ml-1 mt-7">Name</h1>
          <hr className="text-[#000000] w-[350px]" />
          <h1 className="text-[#000000] ml-1 mt-7">Email or Phone Number</h1>
          <hr className="text-[#000000] w-[350px]" />
          <h1 className="text-[#000000] ml-1 mt-7">Password</h1>
          <hr className="text-[#000000] w-[350px]" />
          <button className=" bg-[#DB4444] text-white ml-1 mt-7 p-2 w-[350px]">
            Create Account
          </button>
          <div className=" flex justify-center items-center border gap-3 w-[350px] p-2 rounded-lg mt-7">
            <FcGoogle className=" h-10 w-10 mt-1" />
            <h1 className="text-[#000000]">Sign up with Google</h1>
          </div>
          <div className=" flex gap-4 justify-center w-[350px] mt-7 border p-2 rounded-lg">
            <h1 className="text-[#000000]">Already have account?</h1>
            <h1 className="underline text-[#000000]">Log in</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
