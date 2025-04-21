"use client"

import { useEffect, useState } from "react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const [rotationY, setRotationY] = useState(0)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationY((prev) => prev + 1)
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Cubo 3D */}
      <div className="w-[200px] h-[200px] perspective-[800px] mb-6">
        <div
          className="relative w-full h-full transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotationY}deg)`
          }}
        >
          {[
            { face: "Frente", transform: "rotateY(0deg) translateZ(100px)" },
            { face: "Costas", transform: "rotateY(180deg) translateZ(100px)" },
            { face: "Direita", transform: "rotateY(90deg) translateZ(100px)" },
            { face: "Esquerda", transform: "rotateY(-90deg) translateZ(100px)" },
            { face: "Topo", transform: "rotateX(90deg) translateZ(100px)" },
            { face: "Base", transform: "rotateX(-90deg) translateZ(100px)" },
          ].map((side, i) => (
            <div
              key={i}
              className="absolute w-full h-full flex items-center justify-center bg-white shadow-md border"
              style={{
                transform: side.transform
              }}
            >
              <img src="/logo.png" alt={side.face} className="w-20 h-20" />
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

      {/* Login */}
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
