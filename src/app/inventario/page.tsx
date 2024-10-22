// app/inventario/page.tsx
"use client"
// app/inventario/page.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface Repuesto {
  id: number;
  nombre: string;
  cantidad: number;
}

export default function InventarioPage() {
  const [repuestos, setRepuestos] = useState<Repuesto[]>([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleAgregarRepuesto = () => {
    if (nombre.trim() === '' || cantidad <= 0) return;

    const nuevoRepuesto: Repuesto = {
      id: repuestos.length + 1,
      nombre,
      cantidad,
    };

    setRepuestos([...repuestos, nuevoRepuesto]);
    setNombre('');
    setCantidad(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventario de Repuestos</h1>
      
      {/* Card para el formulario de ingreso */}
      <Card className="mb-4 p-4 shadow-lg">
        <h2 className="text-xl font-semibold mb-3">Agregar Nuevo Repuesto</h2>
        <div className="flex flex-col md:flex-row mb-4">
          <Input 
            type="text" 
            placeholder="Nombre del repuesto" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            className="mr-2 mb-2 md:mb-0" 
          />
          <Input 
            type="number" 
            placeholder="Cantidad" 
            value={cantidad} 
            onChange={(e) => setCantidad(Number(e.target.value))} 
            className="mr-2 mb-2 md:mb-0" 
          />
          <Button onClick={handleAgregarRepuesto} className="w-full md:w-auto">
            Agregar Repuesto
          </Button>
        </div>
      </Card>
      
      {/* Tabla de Repuestos */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Cantidad</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {repuestos.map((repuesto) => (
            <TableRow key={repuesto.id}>
              <TableCell>{repuesto.id}</TableCell>
              <TableCell>{repuesto.nombre}</TableCell>
              <TableCell>{repuesto.cantidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
