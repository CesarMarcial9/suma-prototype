"use client"
import { useSession } from "next-auth/react";
import React from "react";
import { signIn, signOut } from "next-auth/react";
type Props = {};

const SigningButton = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <button
        className="py-2 border border-white rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    );
  }

  if (status === "loading") {
    return (
      <button className="py-2 border border-white rounded-md">
        Loading...
      </button>
    );
  }

  return (
    <button
      className="py-2 border border-white rounded-md"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export default SigningButton;
