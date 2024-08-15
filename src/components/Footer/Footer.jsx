import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


function Footer() {
  return (
    <div className="h-[250px] w-full py-8 bg-black text-white flex items-start justify-center">
      <div className="flex items-start justify-start w-[33.33%] h-full">
      <div className="LinksBox w-full h-full flex flex-col items-start justify-start pl-7">
        <h1 className="font-medium text-md">Explore</h1>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Best Sellers</a>
        </h4>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Weekly Trend</a>
        </h4>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Best Offers</a>
        </h4>
      </div>
      </div>
      <div className="flex items-start justify-start w-[33.33%] h-full">
      <div className="LinksBox w-full h-full flex flex-col items-start justify-start pl-7">
        <h1 className="font-medium text-md">Categories</h1>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Shirts</a>
        </h4>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Pants</a>
        </h4>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Shoes</a>
        </h4>
        <h4 className="text-sm font-light leading-8">
          <a href="/">Accessories</a>
        </h4>
      </div>
      </div>
      <div className="flex items-start justify-start w-[33.33%] h-full">
      <div className="LinksBox w-full h-full flex flex-col items-start justify-start pl-7">
        <h1 className="font-medium text-md">Socials</h1>
        <div className="icons w-full text-2xl flex items-center justify-start py-3 gap-4">
            <a href=""><RiInstagramLine/></a>
            <a href=""><FaFacebook/></a>
            <a href=""><MdEmail/></a>
            <a href=""><IoLogoWhatsapp/></a>      
           </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
