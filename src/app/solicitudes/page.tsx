"use client"
// app/solicitudes/page.tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const SolicitudesPage = () => {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, tipo: "Preventivo", descripcion: "Revisión de sistema de climatización", fecha: "2024-10-17" },
    { id: 2, tipo: "Correctivo", descripcion: "Reparación de motor en la línea de producción", fecha: "2024-10-15" },
  ]);

  const [newSolicitud, setNewSolicitud] = useState({
    tipo: "",
    descripcion: "",
    fecha: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewSolicitud({
      ...newSolicitud,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setNewSolicitud({
      ...newSolicitud,
      tipo: value,
    });
  };

  const handleSubmit = () => {
    const newId = solicitudes.length + 1;
    setSolicitudes([
      ...solicitudes,
      {
        id: newId,
        ...newSolicitud,
      },
    ]);
    setNewSolicitud({ tipo: "", descripcion: "", fecha: "" });
  };

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Solicitudes de Mantenimiento</h2>

      {/* Button to open the dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white" onClick={() => setIsOpen(true)}>
      Nueva Solicitud
    </Button>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Nueva Solicitud de Mantenimiento</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione un tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Preventivo">Preventivo</SelectItem>
                <SelectItem value="Correctivo">Correctivo</SelectItem>
                <SelectItem value="Predictivo">Predictivo</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="fecha"
              type="date"
              placeholder="Fecha"
              value={newSolicitud.fecha}
              onChange={handleInputChange}
              required
            />
            <Textarea
              name="descripcion"
              placeholder="Descripción de la solicitud"
              value={newSolicitud.descripcion}
              onChange={handleInputChange}
              required
            />
            <Button
            type="submit"
            className="bg-green-500 text-white"
            onClick={() => {
              handleSubmit();
              setIsOpen(false); // Cierra el diálogo después de guardar la solicitud
            }}>Guardar Solicitud</Button>
          </form>
  </DialogContent>
</Dialog>

      {/* Table to display the solicitudes */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {solicitudes.map((solicitud) => (
            <TableRow key={solicitud.id}>
              <TableCell>{solicitud.id}</TableCell>
              <TableCell>{solicitud.tipo}</TableCell>
              <TableCell>{solicitud.descripcion}</TableCell>
              <TableCell>{solicitud.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SolicitudesPage;
