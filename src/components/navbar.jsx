"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className=" p-x-2 p-2 flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div>
          <svg
            id="logo-35"
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              className="ccompli1"
              fill="#007AFF"
            ></path>{" "}
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            ></path>{" "}
          </svg>{" "}
        </div>
        <Image
          className="rounded-full"
          alt=""
          width={0}
          height={30}
          src="/vercel.svg"
        />

        <div className="flex gap-3">
          <ModeToggle />

          <div>
            {!session ? (
              <Button>
                <Link href="/api/auth/signin">LogIn</Link>
              </Button>
            ) : (
              <div className="flex gap-3 items-center">
                <Image
                  className="rounded-full"
                  alt="hlh"
                  width={30}
                  height={30}
                  src={session.user?.image}
                />
                <Button>
                  <Link href="/api/auth/signout">SignOut</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
