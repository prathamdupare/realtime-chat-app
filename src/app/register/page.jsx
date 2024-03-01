"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form action="" className="flex flex-col gap-2 w-[300px] outline-0">
        <Input
          className="focus-visible:ring-0"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <Input
          className="focus-visible:ring-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button>Register</Button>
      </form>
    </div>
  );
};

export default Register;
