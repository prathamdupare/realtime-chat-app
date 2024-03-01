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
        <div>Logo</div>
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
              <>
                <Button>Log in</Button>
              </>
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
