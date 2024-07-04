'use client';
import { User } from "@nextui-org/react";
import { BarChart, DonutChart, Legend, BarList } from "@tremor/react";
import { Card, ProgressCircle } from '@tremor/react';



const chartdata = [
  {
    name: "San Miguelito",
    "Zonas más frecuentadas": 20,
  },
  {
    name: "Nuevo Tocumen",
    "Zonas más frecuentadas": 18,
  },
  {
    name: "Cerro Viento",
    "Zonas más frecuentadas": 10,
  },
  {
    name: "Juan Diaz",
    "Zonas más frecuentadas": 3,
  },
];

const calificaciones = [
  {
    name: "Jueves",
    sales: 100,
  },
  {
    name: "Martes",
    sales: 50,
  },
  {
    name: "Lunes",
    sales: 20,
  },
  {
    name: "Miercoles",
    sales: 30
  },
  {
    name: "Viernes",
    sales: 40
  }
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

const dataDays = [
  { name: 'Lunes', value: 100 },
  { name: 'Martes', value: 120 },
  { name: 'Miércoles', value: 90 },
  { name: 'Jueves', value: 150 },
  { name: 'Viernes', value: 180 },
  { name: 'Sábado', value: 200 },
];

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        <div className="flex flex-col items-center space-y-4">
          <User
            name="Jorge Torres"
            description="Ingeniería en Sistemas"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />            

          <div className="flex items-center justify-center flex-col md:flex-row space-x-6 w-full">
            <DonutChart
              data={calificaciones}
              category="sales"
              index="name"
              valueFormatter={dataFormatter}
              colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
              className="w-60 h-60"
            />
            <Legend
              categories={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]}
              colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
              className="max-w-xs mb-4"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="w-full">
                <BarChart
                  data={chartdata}
                  index="name"
                  categories={["Zonas más frecuentadas"]}
                  colors={["blue"]}
                  valueFormatter={dataFormatter}
                  yAxisWidth={64}
                  className="w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex justify-start space-x-5 items-center p-4">
          <ProgressCircle value={100} size="md" />
          <div>
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Número total de viajes realizados: 40
            </p>
          </div>
        </Card>
        <Card className="flex justify-start space-x-5 items-center p-4">
          <ProgressCircle value={70} size="md" />
          <div>
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Calificación: 4/5
            </p>
          </div>
        </Card>

      </div>
      
    </div>
  );
}
