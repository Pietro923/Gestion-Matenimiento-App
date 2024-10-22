// app/configuracion/page.tsx
"use client"
import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConfiguracionPage = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value);
    // Aquí puedes agregar lógica para cambiar el tema de tu app
    console.log("Tema seleccionado:", value);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    // Aquí puedes agregar lógica para cambiar el idioma de tu app
    console.log("Idioma seleccionado:", value);
  };

  return (
    <div className="p-6 space-y-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Configuración</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Tema</label>
              <Select value={selectedTheme} onValueChange={handleThemeChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Oscuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Idioma</label>
              <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">Inglés</SelectItem>
                  <SelectItem value="fr">Francés</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
              Guardar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfiguracionPage;
