"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const ChatList = () => {
  const [loading, setLoading] = useState(true);

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const { data: session } = useSession();
  const currentUser = session?.user;

  const getContacts = async () => {
    try {
      const res = await fetch(
        search !== "" ? `/api/users/searchContact/${search}` : "/api/users",
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const rawUsers = await res.json();
      setContacts(rawUsers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getContacts();
    }
  }, [currentUser, search]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="m-2">
      <Input
        placeholder="Search chat..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="flex p-2 my-2  gap-2 items-center rounded-md w-full hover:bg-secondary cursor-pointer">
                <Avatar>
                  <AvatarImage src={contact.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>{contact.name}</div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default ChatList;
