"use client";
import React from "react";
import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { TbUser } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

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
import Footer1 from "../components/Footer1";
export default function About() {
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
      <div className=" max-w-[1200px]  m-auto ">
        <h1 className=" mx-5 mt-10">Home / About</h1>
        <div className=" mx-5 flex flex-col-reverse lg:flex-row gap-10">
          <div className=" flex lg:flex flex-col gap-6 ">
            <h1 className=" text-4xl font-bold mt-28">Our Story</h1>
            <p className="  w-full lg:w-[500px]">
              Launced in 2015, Exclusive is South Asias premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="w-full lg:w-[500px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className=" mt-28">
            <Image
              src="/Sideimage.png "
              height={700}
              width={700}
              alt="pic"
            ></Image>
          </div>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center mt-20">
          <Image
            src="/Frame 870.png"
            height={200}
            width={200}
            alt="pic"
          ></Image>
          <Image
            className=" border rounded"
            src="/Frame 871.png"
            height={200}
            width={200}
            alt="pic"
          ></Image>
          <Image
            src="/Frame 872.png"
            height={200}
            width={200}
            alt="pic"
          ></Image>
          <Image
            src="/Frame 873.png"
            height={200}
            width={200}
            alt="pic"
          ></Image>
        </div>
        <div className="flex flex-wrap justify-center gap-7  mt-10">
          <div>
            <Image
              src="/Frame 874.png"
              height={266}
              width={266}
              alt="pic"
            ></Image>
            <h1 className=" text-xl font-semibold">Tom Cruise</h1>
            <p className=" text-sm text-[#000000]">Founder & Chairman</p>
            <div className=" flex gap-3 mt-2">
            <CiTwitter />
            <IoLogoInstagram />
            <FaLinkedinIn />

            </div>
          </div>
          <div>
            <Image
              src="/Frame 875.png"
              height={266}
              width={266}
              alt="pic"
            ></Image>
            <h1 className=" text-xl font-semibold">Emma Watson</h1>
            <p className=" text-sm text-[#000000]">Managing Director</p>
            <div className=" flex gap-3 mt-2">
            <CiTwitter />
            <IoLogoInstagram />
            <FaLinkedinIn />
            </div>
          </div>
          <div>
            <Image
              src="/Frame 876.png"
              height={266}
              width={266}
              alt="pic"
            ></Image>
            <h1 className=" text-xl font-semibold">Will Smith</h1>
            <p className=" text-sm text-[#000000]">Product Designer</p>
            <div className=" flex gap-3 mt-2">
            <CiTwitter />
            <IoLogoInstagram />
            <FaLinkedinIn />
            </div>
           
          </div>
        </div>
      </div>
        <Footer1/>
        <Footer/>
    </div>
  );
}
