import Link from 'next/link';
import { LayoutDashboard, Wrench, Calendar, History, Users, Package, BarChart2, Bolt, Home } from 'lucide-react';

const sidebarItems = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/solicitudes", icon: Wrench, label: "Solic. de Mantenimiento" },
  { href: "/programacion", icon: Calendar, label: "Programación de Service" },
  { href: "/historial", icon: History, label: "Historial de Mantenimiento" },
  { href: "/tecnicos", icon: Users, label: "Gestión de Técnicos" },
  { href: "/inventario", icon: Package, label: "Inventario de Repuestos" },
  { href: "/configuracion", icon: Bolt, label: "Configuración" },
];

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 h-screen fixed">
      <h1 className="text-orange-500 text-2xl font-bold text-center">Pueble S.A.</h1>
      <nav>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} className="block py-3 px-4 rounded hover:bg-gray-700">
            <item.icon className="inline-block mr-2" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
