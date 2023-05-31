import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes"></div>

        {/* Sign in */}
        <SignIn />

        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </div>

      {/* Right */}
      <EmptyMemories />
    </main>
  )
}

// Componentes são FUNÇÕES que retornam HTML. Por isso, o nome do arquivo tem o '.tsx' ou .'jsx'.
// TSX = JSX + TypeScript
// JSX = JavaScript + XML - Podemos interpretar o XML como o HTML

// Componentes servem para duas coisas: Separar a aplicação para simplficar manutenção e reaproveitar interface de algo em várias aplicações.
