// app/tecnicos/page.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const tecnicosData = [
  { id: 1, nombre: "Juan Pérez", especialidad: "Mecánico", estado: "Activo" },
  { id: 2, nombre: "María López", especialidad: "Electricista", estado: "Inactivo" },
  { id: 3, nombre: "Carlos García", especialidad: "Hidráulico", estado: "Activo" },
];

export default function TecnicosPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Técnicos</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Especialidad</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {tecnicosData.map((tecnico) => (
            <TableRow key={tecnico.id}>
              <TableCell>{tecnico.id}</TableCell>
              <TableCell>{tecnico.nombre}</TableCell>
              <TableCell>{tecnico.especialidad}</TableCell>
              <TableCell>
                {tecnico.estado === "Activo" ? (
                  <Badge className="bg-green-400 text-slate-950 hover:bg-green-400">Activo</Badge>
                ) : (
                  <Badge className="bg-red-400 text-slate-950 hover:bg-red-400">Inactivo</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
