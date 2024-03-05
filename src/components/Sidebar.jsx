import React from "react";
import SidebarButton from "./SidebarButton";
import ChatList from "./ChatList";

const Sidebar = () => {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 z-40 border-r">
      <div className="h-full px=3 py-4">
        <div className="flex flex-col gap-1 w-full">
          <ChatList />
          <SidebarButton>Hello</SidebarButton>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
