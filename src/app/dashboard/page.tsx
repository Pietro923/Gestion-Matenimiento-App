// app/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BarChart, PieChart } from "lucide-react"; // Ejemplo de íconos para estadísticas

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard de Estadísticas</h1>
      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta 1: Total de Solicitudes */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total de Solicitudes</CardTitle>
            <BarChart className="w-6 h-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">150</p>
            <p className="text-gray-500">En el último mes</p>
            <Button variant="outline" className="mt-4">Ver Detalles</Button>
          </CardContent>
        </Card>

        {/* Tarjeta 2: Servicios Completados */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Servicios Completados</CardTitle>
            <PieChart className="w-6 h-6 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">95</p>
            <p className="text-gray-500">Hasta la fecha</p>
            <Button variant="outline" className="mt-4">Ver Detalles</Button>
          </CardContent>
        </Card>

        {/* Tarjeta 3: Técnicos Activos */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Técnicos Activos</CardTitle>
            <BarChart className="w-6 h-6 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold">12</p>
            <p className="text-gray-500">En este momento</p>
            <Button variant="outline" className="mt-4">Ver Detalles</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Gráfica de Barra (Ejemplo) */}
        <Card className="h-64">
          <CardHeader>
            <CardTitle>Resumen de Solicitudes</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Aquí podrías insertar un gráfico de barra */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Gráfico de Barra (Placeholder)
            </div>
          </CardContent>
        </Card>

        {/* Gráfica Circular (Ejemplo) */}
        <Card className="h-64">
          <CardHeader>
            <CardTitle>Distribución de Mantenimiento</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Aquí podrías insertar un gráfico circular */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Gráfico Circular (Placeholder)
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
