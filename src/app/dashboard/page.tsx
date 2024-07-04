'use client';

import { DonutChart, Legend, BarChart, LineChart } from "@tremor/react";
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
    name: "Miércoles",
    sales: 30
  },
  {
    name: "Viernes",
    sales: 40
  }
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

const totalUsuarios = 500;
const conductoresActivos = 120;

const usuariosActivosData = [
  { date: 'Lunes', usuariosActivos: 480 },
  { date: 'Martes', usuariosActivos: 490 },
  { date: 'Miércoles', usuariosActivos: 500 },
  { date: 'Jueves', usuariosActivos: 490 },
  { date: 'Viernes', usuariosActivos: 495 },
  { date: 'Sábado', usuariosActivos: 500 },
  { date: 'Domingo', usuariosActivos: 510 },
];

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      {/* Encabezado con DonutChart y Legend */}
      <div> 
            <h2 className="text-lg font-bold mb-4">Usuarios Activos por Día de la Semana</h2>
          <LineChart
            className="h-72"
            data={usuariosActivosData}
            index="date"
            categories={['usuariosActivos']}
            colors={['blue']}
            yAxisWidth={40}
          />
          </div>
      <div className="flex items-center justify-center mb-6">
        <div className="flex   space-y-4">
          <DonutChart
            data={calificaciones}
            category="sales"
            index="name"
            valueFormatter={dataFormatter}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="w-60 h-60"
          />
          <Legend
            categories={["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="max-w-xs mb-4"
          />
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

      {/* Grid para BarChart y Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card con número total de usuarios */}
        <Card className="flex justify-start space-x-5 items-center p-4">
          <ProgressCircle value={totalUsuarios}  size="md" />
          <div>
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Total de usuarios activos: {totalUsuarios}
            </p>
          </div>
        </Card>

        {/* Card con cantidad de conductores activos */}
        <Card className="flex justify-start space-x-5 items-center p-4">
          <ProgressCircle value={conductoresActivos}  size="md" />
          <div>
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Conductores activos: {conductoresActivos}
            </p>
          </div>
        </Card>

        {/* Card con número total de viajes y calificación promedio */}
        <Card className="flex justify-start space-x-5 items-center p-4">
          <ProgressCircle value={40} size="md" />
          <div>
            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Número total de viajes realizados: 40 / Meta: 200
            </p>
          </div>
        </Card>

        {/* LineChart con número de usuarios activos */}
       
      </div>
    </div>
  );
}
