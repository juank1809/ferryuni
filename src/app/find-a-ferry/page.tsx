"use client";

import TitleHeader from "../components/title-header";
import MapInput from "../components/map-input";
import dynamic from "next/dynamic";
import { use, useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const localizaciones = {
  "Universidad Tecnologica": [9.022283475120235, -79.53188375397403],
  "San Miguelito": [9.053203134843155, -79.50944779811542],
  "Juan Díaz": [9.037940195716839, -79.48071995044415],
  "Cerro Viento": [9.050654764228998, -79.45007697024258],
  "Nuevo Tocumen": [9.103627147281484, -79.3784083447782],
};

export default function Page() {
  const [value, setValue] = useState<React.Key>("Universidad Tecnologica");
  const router = useRouter();

  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>Mapa cargando</p>,
        ssr: false,
      }),
    [value]
  );

  console.log("LOCALIZACIONESS", localizaciones[value]);
  return (
    <>
      <TitleHeader>Encuentra un ferry</TitleHeader>
      <MapInput
        lugares={Object.keys(localizaciones)}
        value={value}
        setValue={setValue}
      />
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map posix={localizaciones[value]} />
      </div>

      <Button
        color="primary"
        onClick={() => router.push("/find-a-ferry/available")}
      >
        Encuentra un Ferry
      </Button>
    </>
  );
}
