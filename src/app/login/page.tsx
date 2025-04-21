"use client"

import { signIn } from "next-auth/react"
import { useState, useEffect } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn("credentials", {
      email,
      password: senha,
      callbackUrl: "/dashboard"
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Cubo girando com logo */}
      <div className="w-40 h-40 mb-10 relative perspective-[1000px]">
        <div
          className="absolute w-full h-full transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg) rotateX(${rotation}deg)`
          }}
        >
          {["front", "back", "right", "left", "top", "bottom"].map((face, i) => (
            <div
              key={face}
              className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300 shadow-md"
              style={{
                transform: [
                  "translateZ(80px)",
                  "rotateY(180deg) translateZ(80px)",
                  "rotateY(90deg) translateZ(80px)",
                  "rotateY(-90deg) translateZ(80px)",
                  "rotateX(90deg) translateZ(80px)",
                  "rotateX(-90deg) translateZ(80px)"
                ][i],
              }}
            >
              <img src="/logo.png" alt="Logo" className="w-16 h-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Nome do escritório */}
      <h1
        className="text-3xl mb-6 text-gray-800"
        style={{ fontFamily: "Geneva, Tahoma, Verdana, sans-serif" }}
      >
        Cássio Moura Advocacia
      </h1>

      {/* Campos de login */}
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
