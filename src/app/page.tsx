// app/page.tsx
import { Button } from "@/components/ui/button"; // Asegúrate de que la ruta es correcta
import { Card } from "@/components/ui/card"; // Asegúrate de que la ruta es correcta
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4 text-center font-bold text-gray-900">
        Bienvenido a Pueble S.A.
      </h1>
      <p className="text-center mb-8 text-gray-700 text-xl">
        Tu solución integral para la gestión de mantenimiento.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="flex flex-col justify-between p-4 bg-gray-800 text-white">
          <h2 className="text-xl mb-2 font-semibold">Solicitudes Pendientes</h2>
          <p className="flex-grow text-gray-400">
            Aquí puedes gestionar todas las solicitudes de mantenimiento que han sido registradas.
          </p>
          <Link href="solicitudes" className="inline-block">
          <Button className="w-full px-6 py-2 text-black mt-4 hover:bg-slate-300 font-semibold" variant="outline">
              Ver Solicitudes
          </Button>
          </Link>
        </Card>

        <Card className="flex flex-col justify-between p-4 bg-gray-800 text-white">
          <h2 className="text-xl mb-2 font-semibold">Estadísticas Generales</h2>
          <p className="flex-grow text-gray-400">
            Analiza el rendimiento de los servicios de mantenimiento con nuestras herramientas de reporte.
          </p>
          <Link href="dashboard" className="inline-block">
          <Button className="w-full px-6 py-2 text-black mt-4 hover:bg-slate-300 font-semibold" variant="outline">Ver Estadísticas</Button>
          </Link>
        </Card>

        <Card className="flex flex-col justify-between p-4 bg-gray-800 text-white">
          <h2 className="text-xl mb-2 font-semibold">Gestión de Técnicos</h2>
          <p className="flex-grow text-gray-400">
            Administra el equipo de técnicos de manera eficiente y optimiza la asignación de tareas.
          </p>
          <Link href="tecnicos" className="inline-block">
          <Button className="w-full px-6 py-2 text-black mt-4 hover:bg-slate-300 font-semibold" variant="outline">
              Ver Tecnicos
          </Button>
          </Link>
        </Card>

        
      </div>
    </div>
  );
}
