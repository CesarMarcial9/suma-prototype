"use client"
import React from "react";
import { BsFillHouseDoorFill, BsChevronRight } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <BsFillHouseDoorFill />,
  },
  {
    id: 2,
    text: "Check up",
  },
  {
    id: 3,
    url: "/sumaverse",
    text: "Sumaverse",
    icon: <BiWorld />,
  },
  {
    id: 4,
    url: "/sumaversity",
    text: "Sumaversity",
    icon: <MdOutlineSchool />,
  },
  {
    id: 5,
    url: "/marketplace",
    text: "Marketplace",
    icon: <SiMarketo />,
  },
];
const Navbar = () => {
    const path = usePathname()
  return (
    <nav className="flex items-center flex-1 rounded-md">
      <div className="flex flex-col w-full gap-2">
        {links.map((link) => {
          if (link.id == 2) {
            return (
              <button className={`p-2 items-center rounded-md text-lg flex justify-between `}>
                Check up <BsChevronRight />
              </button>
            );
          } else {
            return (
              <Link
                href={link.url!}
                passHref
                key={link.id}
                className={`p-2 items-center rounded-md text-lg flex justify-between ${link.url == path ? 'bg-primary-600' : ''}`}
              >
                {link.text}
                {link.icon}
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Navbar;
