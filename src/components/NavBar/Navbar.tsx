import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../assets/download.png";
function Navbar() {
  let links = [
    "WHO WE ARE",
    "OUR SERVICES",
    "OUR ADVANTAGEOUS",
    "CUSTOMER REVIEWS",
    "CONTACT US",
  ];
  return (
    <div className="flex gap-24 ml-[10%] items-center text-center">
      <div>
        <Image src={logo} alt="" />
      </div>
      <div className="flex flex-row gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href="#"
              key={index}
              className="text-md text-white font-semibold z-50"
            >
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
