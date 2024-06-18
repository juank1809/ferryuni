"use client";

import { User } from "@nextui-org/react";
import { BarChart, DonutChart, Legend } from "@tremor/react";

const chartdata = [
  {
    name: "San Miguelito",
    "Zonas mas frecuentadas": 20,
  },
  {
    name: "Nuevo Tocumen",
    "Zonas mas frecuentadas": 18,
  },
  {
    name: "Cerro Viento",
    "Zonas mas frecuentadas": 10,
  },
  {
    name: "Juan Diaz",
    "Zonas mas frecuentadas": 3,
  },
];

const calificaciones = [
  {
    name: "Satisfaccion",
    sales: 980,
  },
  {
    name: "Puntualidad",
    sales: 456,
  },
  {
    name: "Eficiencia",
    sales: 390,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export default function Page() {
  return (
    <>
      <User
        name="Jorge Torres"
        description="Ingeniería en Sistemas"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
      <BarChart
        data={chartdata}
        index="name"
        categories={["Zonas mas frecuentadas"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        onValueChange={(v) => console.log(v)}
      />
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={calificaciones}
          category="sales"
          index="name"
          valueFormatter={dataFormatter}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="w-40 mt-10"
        />
        <Legend
          categories={["Satisfaccion", "Puntualidad", "Eficiencia"]}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="max-w-xs"
        />
      </div>
    </>
  );
}
