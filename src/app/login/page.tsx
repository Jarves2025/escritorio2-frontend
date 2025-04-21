'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn("credentials", {
      email,
      password: senha,
      callbackUrl: "/dashboard"
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Cubo 3D com logo */}
      <div className="relative w-40 h-40 mb-10 perspective">
        <div className="cubo-3d">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src="/logo.png"
              alt={`Logo face ${i + 1}`}
              className={`face face${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Nome do escritório com fonte Geneva */}
      <h1
        className="text-3xl mb-6 text-gray-800"
        style={{
          fontFamily: "Geneva, Tahoma, Verdana, sans-serif",
          fontWeight: 600,
        }}
      >
        Cássio Moura Advocacia
      </h1>

      {/* Formulário de login */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
