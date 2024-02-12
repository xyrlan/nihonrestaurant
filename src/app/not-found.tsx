import React from 'react'

export default function NotFound() {

  return (
<div className="grid h-screen place-content-center bg-[#292824] px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-[#b93531] sm:text-4xl">Ah não!</p>

    <p className="mt-4 text-lg text-gray-500">Não conseguimos achar a página.</p>

    <a
      href="/"
      className="mt-6 inline-block rounded bg-black px-5 py-3 text-sm font-medium text-[#b93531] hover:bg-gray-800 focus:outline-none focus:ring"
    >
      Voltar para pagina inicial.
    </a>
  </div>
</div>
  )
}

