import React from "react";
import { Button } from "./ui/button";

const SidebarButton = ({ children }) => {
  return (
    <Button variant="ghost" className="gap-2 justify-start text-bold text-lg">
      {children}
    </Button>
  );
};

export default SidebarButton;
