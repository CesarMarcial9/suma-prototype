import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};
import { BiLogIn, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    id: 1,
    url: "/expenses",
    text: "Expenses",
  },
  {
    id: 2,
    url: "/budget",
    text: "Budget",
  },
  {
    id: 3,
    url: "/savings",
    text: "Savings",
  },
  {
    id: 4,
    url: "/emergencyFunds",
    text: "Emergency funds",
  },
  {
    id: 5,
    url: "/networth",
    text: "Networth",
  },
  {
    id: 6,
    url: "/debtToIncomeRatio",
    text: "D/I ratio",
  },
  {
    id:  7,
    url: "/sumaversity",
    text: "Sumaversity"
  }
];

/**
 * Navbar is the main dashboard navbar component.
 * It is used in _app.tsx so it can be available on every page.
 *
 * @returns
 */
const Navbar = () => {
  const { data: session, status } = useSession();
  const { asPath } = useRouter();

  return (
    <div className="flex flex-col justify-between text-white rounded-md shadow-sm">
      <div className="flex flex-col gap-4 pb-6 border-b-2 border-b-white ">
        <div className="flex items-center justify-center py-2 bg-white rounded-md">
          <h2 className="text-4xl text-primary">SUMA</h2>
        </div>
        <h2 className="text-3xl">
          Welcome to your dashboard, {`${session?.user?.name || "user"}.`}{" "}
        </h2>
      </div>

      <nav className="grid gap-2 py-2">
        <Link
          href={"/"}
          className={`flex items-center justify-center py-2 text-center border rounded-md hover:bg-white hover:text-primary ${
            asPath == "/" ? "bg-white text-primary font-medium" : ""
          }`}
        >
          Home
        </Link>
        {links.map((l) => (
          <Link
            href={l.url}
            key={l.id}
            className={`flex items-center justify-center py-2 text-center border rounded-md hover:bg-white hover:text-primary ${
              asPath == l.url ? "bg-white text-primary font-medium" : ""
            }`}
          >
            {l.text}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-1 pt-6 border-t-2 border-t-white">
        <div className="flex-1 ">
          <button className="flex-1 w-full py-2 text-white uppercase rounded-md shadow-md font-main bg-primary">
            Connect bank account
          </button>
        </div>
        <div></div>
        
          <button
            className="flex items-center justify-center flex-1 gap-2 py-2 border rounded-md"
            onClick={() => { status == "authenticated" ? signOut() : signIn()}}
          >
            <p>{status == "authenticated" ? "Sign out" : "Sign in"}</p>
            {status == "authenticated" ? <BiLogOut className="text-2xl" /> : <BiLogIn className="text-2xl" />}
          </button>
        
      </div>
    </div>
  );
};

export default Navbar;
