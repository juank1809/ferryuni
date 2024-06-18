"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Page() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const router = useRouter();

  return (
    <Card className="max-w-[360px]">
      <CardHeader className="justify-evenly justify-items-center">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-10.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Jorge Torres
            </h4>
          </div>
        </div>
        <div className="flex flex-col w-32">
          <Button
            color="primary"
            onClick={() => router.push("/user/dashboard")}
          >
            Datos
          </Button>
          <Button
            color="default"
            className="bg-white text-gray-600 border-gray-600 mt-8 border"
          >
            Request
          </Button>{" "}
        </div>
      </CardHeader>
      <CardBody className="px-12 py-0 text-small text-gray-800">
        <p>Mayo 24 de Junio</p>
      </CardBody>
      <CardFooter className="gap-12">
        <div className="gap-1 text-gray-800 flex flex-col">
          <p className="font-semibold  text-small">
            Origen: Universidad Tecnológica
          </p>
          <p className=" text-small">Destino: San Miguelito</p>
        </div>
      </CardFooter>
    </Card>
  );
}
