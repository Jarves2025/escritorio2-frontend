'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import './login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const audio = new Audio('/sfx/click.mp3')
    audio.play()
    await signIn('credentials', {
      email,
      password: senha,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <div className="login-container">
      {/* Cubo 3D */}
      <div className="cubo-wrapper">
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

      {/* Nome do escritório */}
      <h1 className="titulo">Cássio Moura Advocacia</h1>

      {/* Formulário de login */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
