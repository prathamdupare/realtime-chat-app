"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useEffect } from "react";

const Chat = () => {
  // Declare socketInitializer before using it

  return (
    <div className="flex flex-col gap-2 h-full justify-between">
      <div className="flex-grow">Message to selected person</div>
      <div>
        <Textarea />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Chat;
