// 'use client'
// Isso faz enviar o JS da página toda, mas só quero enviar o do input nesse caso.

import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>
      <NewMemoryForm />
    </div>
  )
}

// O Next.js, por baixo dos panos, faz a nossa aplicação rodar sem precisar usar o JavaScript. Ele cria a interface da aplicação por uma camada intermediária do frontend e backend. Essa camada é o backend for frontend do Next.js. (Quando criamos uma aplicação Next.js, ele cria um servidor Node.js).
// Só que existem componentes que precisam de JS para funcionar, sendo estes os componentes que precisam e REATIVIDADE (interação do usuário). Tipo um onChange por exemplo.
// Para esses componentes, utilizamos uma diretiva chamada onClient().
