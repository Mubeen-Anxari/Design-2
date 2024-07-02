import React from "react";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="bg-black h-auto ">
      <div className=" max-w-[1000px] m-auto flex flex-col mt-20 lg:flex-row justify-between items-center gap-5    ">
        <div className=" mt-2">
          <h1 className=" text-white font-bold">Exclusive</h1>
          <p className=" text-gray-400 ">Subscribe</p>
          <p className=" text-gray-400 ">Get 10% off your first order</p>
          <div className=" flex gap-5">
            <p className=" text-[#FAFAFA]">Enter your email</p>
            <Image src="/icon.png" height={5} width={10} alt="pic"></Image>
          </div>
        </div>
        <div>
          <div className=" mt-2">
            <h1 className=" text-white font-bold">Support</h1>
            <p className=" w-[200px] text-gray-400 ">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className=" w-[200px] text-gray-400 ">exclusive@gmail.com </p>
            <p className=" text-gray-400 ">+88015-88888-9999</p>
          </div>
        </div>
        <div>
          <div className=" mt-2">
            <h1 className=" text-white font-bold">Account</h1>
            <p className=" w-[200px] text-gray-400 ">My Account</p>
            <p className=" w-[200px] text-gray-400 ">Cart</p>
            <p className=" text-gray-400 ">Wishlist</p>
            <p className=" text-gray-400 ">Shop</p>
          </div>
        </div>
        <div>
          <div className=" mt-2">
            <h1 className=" text-white font-bold">Quick Link</h1>
            <p className=" w-[200px] text-gray-400 ">Privacy Policy</p>
            <p className=" w-[200px] text-gray-400 ">FAQ </p>
            <p className=" text-gray-400 ">Contact</p>
          </div>
        </div>
        <div>
          <div className=" mt-2">
            <h1 className=" text-white font-bold">Download App</h1>
            <p className=" w-[200px] text-gray-400 ">
              Save $3 with App New User Only
            </p>
            <div className=" flex gap-2">
              <div>
                <Image
                  src="/QrCode.png"
                  height={40}
                  width={40}
                  alt="pic"
                ></Image>
              </div>
              <div className=" flex flex-col gap-2">
                <Image
                  src="/appstore.png"
                  height={20}
                  width={45}
                  alt="pic"
                ></Image>
                <Image
                  src="/GooglePlay.png"
                  height={20}
                  width={45}
                  alt="pic"
                ></Image>
              </div>
             
            </div>
            <div className=" flex gap-5 mt-5">
                <GrFacebookOption className=" text-white" />
                <FiTwitter className=" text-white" />
                <FaInstagram className=" text-white" />
                <FaLinkedinIn className=" text-white" />

              </div>
          </div>
        </div>
      </div>
      <div className=" text-[#FFFFFF] text-center mt-20">
        <h1 >Copyright Rimel 2022. All right reserved</h1>
      </div>
    </div>
  );
}
