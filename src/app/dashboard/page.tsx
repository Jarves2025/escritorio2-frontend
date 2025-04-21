// src/app/dashboard/page.tsx

export default function Dashboard() {
  return (
    <div className="p-6" style={{ fontFamily: "Open Sans, sans-serif" }}>
      {/* Topbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Área de trabalho</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">ADICIONAR TAREFA</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Área principal */}
        <div className="col-span-2 bg-white p-6 rounded shadow">
          <p className="text-sm text-gray-600">Ainda não existem tarefas cadastradas nesta lista.</p>
        </div>

        {/* Coluna lateral */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-md font-semibold mb-2">Processos e casos</h2>
            <p className="text-sm text-gray-600">8 não tiveram movimentação</p>
            <p className="text-sm text-gray-600">0 tiveram movimentação</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-md font-semibold mb-2">Estatísticas</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Atendimentos ativos: 1</li>
              <li>Honorários a faturar: R$ 0,00</li>
              <li>Despesas a faturar: R$ 0,00</li>
              <li>Timesheets 30 dias: 0h</li>
              <li>Documentos 30 dias: 18</li>
              <li>Históricos 30 dias: 0</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-md font-semibold mb-2">Lembretes</h2>
            <p className="text-sm text-gray-600">Hoje: Sem compromissos agendados</p>
            <p className="text-sm text-gray-600">Amanhã: Sem compromissos agendados</p>
            <p className="text-sm text-gray-600">Futuros: 31 mai 11:10 - Perícia Médica</p>
          </div>
        </div>
      </div>
    </div>
  );
}
