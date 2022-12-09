"use client"
import React from "react";
import { useSession } from "next-auth/react";

const Header = () => {
    const { data: session } = useSession()
  return (
    <header className="flex flex-col gap-2 p-2 rounded-md ">
      <div className="border-b-2">
        <h1 className="text-3xl text-center font-main ">SUMA</h1>
      </div>
      <div>
        <h2 className="text-4xl ">Welcome to your dashboard, {session?.user?.name || "user"}.</h2>
      </div>
    </header>
  );
};

export default Header;
