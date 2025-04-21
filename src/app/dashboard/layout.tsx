// src/app/dashboard/layout.tsx

import {
    FaListUl, FaCalendarAlt, FaUserFriends, FaComments, FaFolderOpen,
    FaNewspaper, FaDollarSign, FaFileAlt, FaChartBar, FaBell
  } from "react-icons/fa"
  import Link from "next/link"
  
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex min-h-screen bg-gray-100" style={{ fontFamily: "Open Sans, sans-serif" }}>
        {/* Menu lateral */}
        <aside className="w-64 bg-white border-r shadow-sm">
          <div className="p-4 font-bold text-lg border-b">Escritório 2.0</div>
          <nav className="flex flex-col p-2 text-sm text-gray-700 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaListUl className="text-gray-600" /> Área de trabalho
            </Link>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaCalendarAlt className="text-gray-600" /> Agenda
            </a>
            <Link href="/dashboard/clientes" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaUserFriends className="text-gray-600" /> Clientes
            </Link>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaComments className="text-gray-600" /> Atendimentos
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaFolderOpen className="text-gray-600" /> Processos e casos
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaNewspaper className="text-gray-600" /> Publicações
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaDollarSign className="text-gray-600" /> Financeiro
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaFileAlt className="text-gray-600" /> Documentos
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
              <FaChartBar className="text-gray-600" /> Indicadores
            </a>
            <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-red-600">
              <FaBell className="text-red-600" /> Alertas
            </a>
          </nav>
          <div className="mt-auto p-2 text-xs text-gray-500">Suporte</div>
        </aside>
  
        {/* Conteúdo dinâmico */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    )
  } 
  