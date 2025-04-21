export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="text-center">
        <img
          src="/logo.png"
          alt="Logo Escritório 2.0"
          className="w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Escritório 2.0
        </h1>
        <p className="text-lg text-gray-600">
          Bem-vindo ao sistema inteligente do seu escritório de advocacia.
        </p>
      </div>
    </main>
  );
}
