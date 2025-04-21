import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const usuarioFake = {
          id: "1",
          email: "admin@escritorio.com",
          senhaCriptografada: "$2b$10$8xC69nyP6zzVYZ4jhxLVLe0WGyDJ.dQn1P7QDAzLvdT6wKfA6jWli" // senha: 123456
        }

        const senhaConfere = await bcrypt.compare(
          credentials!.password,
          usuarioFake.senhaCriptografada
        )

        if (credentials!.email === usuarioFake.email && senhaConfere) {
          return { id: usuarioFake.id, email: usuarioFake.email }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
