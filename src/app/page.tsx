'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '@/logo.png'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email === 'admin@cassioadv.com' && senha === 'admin123') {
      router.push('/dashboard')
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <div className="w-32 h-32 rounded-xl shadow-lg animate-spin-slow">
        <Image
          src={logo}
          alt="Logo Escritório Cássio Moura"
          className="object-contain w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold" style={{ fontFamily: 'Geneva, sans-serif' }}>
        Cássio Moura Advocacia
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xs space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
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
