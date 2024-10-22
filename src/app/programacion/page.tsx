"use client"
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { saveAs } from "file-saver";

interface ComponentStatus {
  name: string;
  status: "ok" | "alert";
}

interface Machine {
  id: number;
  type: string;
  status: "pendiente" | "en curso" | "terminado";
  components: ComponentStatus[];
  hasResults: boolean;
}

const machineTypes = [
  "Excavadora CAT 320",
  "Retroexcavadora Komatsu WB93R",
  "Sembradora Case III 2000 Air Drill",
];

export default function ServiceProgramming() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [isAddMachineOpen, setIsAddMachineOpen] = useState(false);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);
  const [isViewResultsOpen, setIsViewResultsOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const handleAddMachine = (type: string) => {
    const newMachine: Machine = {
      id: machines.length + 1,
      type,
      status: "pendiente",
      components: [
        { name: "Motor", status: "ok" },
        { name: "Frenos", status: "ok" },
        { name: "Aceite", status: "ok" },
        { name: "Filtro de aire", status: "ok" },
        { name: "Batería", status: "ok" },
      ],
      hasResults: false,
    };
    setMachines([...machines, newMachine]);
    setIsAddMachineOpen(false);
  };

  const handleStatusChange = (
    machineId: number,
    newStatus: "pendiente" | "en curso" | "terminado"
  ) => {
    setMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.id === machineId ? { ...machine, status: newStatus } : machine
      )
    );
    if (newStatus === "terminado") {
      const machine = machines.find((m) => m.id === machineId);
      setSelectedMachine(machine ?? null);
      setIsResultDialogOpen(true);
    }
  };

  const handleComponentStatusChange = (
    componentName: string,
    status: "ok" | "alert"
  ) => {
    if (!selectedMachine) return;

    setSelectedMachine({
      ...selectedMachine,
      components: selectedMachine.components.map((comp) =>
        comp.name === componentName ? { ...comp, status } : comp
      ),
    });
  };

  const handleSaveResults = () => {
    if (!selectedMachine) return;

    // Update the machine with the results and mark it as "terminado"
    setMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.id === selectedMachine.id
          ? { ...selectedMachine, hasResults: true, status: "terminado" }
          : machine
      )
    );
    setIsResultDialogOpen(false);
  };

  const handleDownloadReport = () => {
    if (!selectedMachine) return;

    const report = selectedMachine.components
      .map(
        (component) =>
          `${component.name}: ${
            component.status === "ok" ? "En buen estado" : "Requiere atención"
          }`
      )
      .join("\n");

    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `service-report-${selectedMachine.type}.txt`);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Programación de Servicios</h1>
        <Button
          className="bg-green-500 text-white"
          onClick={() => setIsAddMachineOpen(true)}
        >
          Agregar Máquina
        </Button>
      </div>

      {machines.map((machine) => (
        <div
          key={machine.id}
          className="bg-white shadow rounded p-4 flex justify-between items-center mb-4"
        >
          <div>
            <h2 className="text-lg font-semibold">{machine.type}</h2>
            <p className="text-sm text-gray-600">Estado: {machine.status}</p>
          </div>
          <div className="space-x-2">
            {machine.status !== "terminado" && !machine.hasResults && (
              <>
                <Button
                  className="bg-yellow-500 text-white"
                  onClick={() => handleStatusChange(machine.id, "en curso")}
                >
                  En Curso
                </Button>
                <Button
                  className="bg-red-500 text-white"
                  onClick={() => handleStatusChange(machine.id, "terminado")}
                >
                  Terminado
                </Button>
              </>
            )}
            {machine.status === "terminado" && machine.hasResults && (
              <Button
                className="bg-blue-500 text-white"
                onClick={() => {
                  setSelectedMachine(machine);
                  setIsViewResultsOpen(true);
                }}
              >
                Ver Resultados
              </Button>
            )}
          </div>
        </div>
      ))}

      {/* Popup para agregar máquinas */}
      <Dialog open={isAddMachineOpen} onOpenChange={setIsAddMachineOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Agregar Máquina</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {machineTypes.map((type) => (
              <Button
                key={type}
                className="w-full bg-blue-500 text-white"
                onClick={() => handleAddMachine(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup para cargar resultados de componentes */}
      <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Cargar Resultados - {selectedMachine?.type}</DialogTitle>
          </DialogHeader>
          {selectedMachine && (
            <div className="space-y-3">
              {selectedMachine.components.map((component) => (
                <div
                  key={component.name}
                  className="flex items-center justify-between"
                >
                  <span>{component.name}</span>
                  <select
                    className="border rounded p-1"
                    value={component.status}
                    onChange={(e) =>
                      handleComponentStatusChange(
                        component.name,
                        e.target.value as "ok" | "alert"
                      )
                    }
                  >
                    <option value="ok">Ok</option>
                    <option value="alert">Requiere atención</option>
                  </select>
                </div>
              ))}
              <Button
                className="bg-green-500 text-white mt-4"
                onClick={handleSaveResults}
              >
                Guardar Resultados
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Popup para ver resultados de componentes */}
      <Dialog open={isViewResultsOpen} onOpenChange={setIsViewResultsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Resultados del Service - {selectedMachine?.type}
            </DialogTitle>
          </DialogHeader>
          {selectedMachine && (
            <div className="space-y-3">
              {selectedMachine.components.map((component, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-2"
                >
                  <span>{component.name}</span>
                  {component.status === "ok" ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <XCircle className="text-red-500" />
                  )}
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              className="bg-green-500 text-white"
              onClick={handleDownloadReport}
            >
              Descargar Reporte
            </Button>
            <Button
              className="bg-gray-500 text-white"
              onClick={() => window.print()}
            >
              Imprimir
            </Button>
            <Button
              className="bg-red-500 text-white"
              onClick={() => setIsViewResultsOpen(false)}
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
