"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import TitleHeader from "./components/title-header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white  flex flex-col justify-between justify-items-center py-20 px-12">
      <TitleHeader>Hola, Juan</TitleHeader>
      <Image
        src="/images/mask_group.png"
        alt="Example Image"
        width={300}
        height={300}
        className="mb-16"
      />
      <Button color="primary" onClick={() => router.push("/find-a-ferry")}>
        Encuentra un Ferry
      </Button>
      <Button
        color="default"
        className="bg-white text-gray-600 border-gray-600 mt-4 border"
      >
        Publica un Ferry
      </Button>
    </div>
  );
}
