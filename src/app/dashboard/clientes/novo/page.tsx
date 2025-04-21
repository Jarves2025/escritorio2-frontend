// src/app/dashboard/clientes/novo/page.tsx

'use client'

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NovoClientePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    ddd: "",
    telefone: "",
    email: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/upload-json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log("📂 Upload concluído:", result);
        alert("✅ Cliente salvo com sucesso no Google Drive!");
        router.push("/dashboard/clientes");
      } else {
        alert("❌ Erro ao salvar cliente. Verifique o backend.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("❌ Falha na conexão com o servidor.");
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Cadastro de Cliente</h1>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
          <input
            name="nome"
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o nome completo"
            required
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        {/* CPF e Data de Nascimento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
            <input
              name="cpf"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Digite o CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
            <input
              name="nascimento"
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={formData.nascimento}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Telefones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">DDD</label>
            <input
              name="ddd"
              type="text"
              maxLength={2}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="XX"
              value={formData.ddd}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input
              name="telefone"
              type="tel"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Digite o telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Digite o email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Endereço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
            <input name="cep" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Digite o CEP" value={formData.cep} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
            <input name="rua" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Digite a rua" value={formData.rua} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
            <input name="numero" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Número" value={formData.numero} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
            <input name="bairro" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Digite o bairro" value={formData.bairro} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
            <input name="cidade" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Digite a cidade" value={formData.cidade} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <input name="estado" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="UF" value={formData.estado} onChange={handleChange} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
            <input name="complemento" type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Casa, bloco, apto..." value={formData.complemento} onChange={handleChange} />
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4">
          <button type="button" onClick={() => router.push('/dashboard/clientes')} className="text-gray-600 hover:underline">
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
