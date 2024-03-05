import Chat from "@/components/Chat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="ml-[280px]">
      <h1 className="h-full">
        <Chat />
      </h1>
    </main>
  );
}
