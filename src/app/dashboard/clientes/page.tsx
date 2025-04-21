// src/app/dashboard/clientes/page.tsx

'use client'

import Link from 'next/link';

export default function ClientesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Clientes</h1>
        <Link
          href="/dashboard/clientes/novo"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Adicionar
        </Link>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Nome</th>
              <th className="px-6 py-3 text-left font-medium">Telefone</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white text-sm text-gray-700">
            <tr>
              <td className="px-6 py-4" colSpan={3}>
                Nenhum cliente cadastrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
