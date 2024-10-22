// app/historial/page.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mantenimientoData = [
  { id: 1, fecha: "2024-10-10", maquina: "Excavadora CAT 320", tipo: "Preventivo", estado: "Completado" },
  { id: 2, fecha: "2024-09-15", maquina: "Retroexcavadora Komatsu WB93R", tipo: "Correctivo", estado: "Pendiente" },
  { id: 3, fecha: "2024-08-30", maquina: "Sembradora Case Iii 2000 Air Drill", tipo: "Preventivo", estado: "Completado" },
];

export default function HistorialPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Historial de Mantenimiento</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Máquina</TableHead>
            <TableHead>Tipo de Mantenimiento</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {mantenimientoData.map((mantenimiento) => (
            <TableRow key={mantenimiento.id}>
              <TableCell>{mantenimiento.id}</TableCell>
              <TableCell>{mantenimiento.fecha}</TableCell>
              <TableCell>{mantenimiento.maquina}</TableCell>
              <TableCell>{mantenimiento.tipo}</TableCell>
              <TableCell>
                {mantenimiento.estado === "Completado" ? (
                  <Badge className="bg-green-400 text-slate-800 hover:bg-green-300">Completado</Badge>
                ) : (
                  <Badge className="bg-yellow-400 text-slate-800 hover:bg-yellow-300">Pendiente</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
