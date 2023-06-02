import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'

// Carregar a fonte no Next usando o 'import' e, não, a maneira como o Google fonts recomenda, evita o "Layout Shift".
// Layout Shift: é quando carregamos uma página na web e as fontes carregam primeiro padrão e, depois de alguns segundos, trocam para as personalizadas.

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

// O "latin" serve para configurar o quanto queremos usar dessa fonte, como acentuação própria e tudo mais. Sempre fica em latim.
// O "variable" serve para integrarmos essa fonte com o TailwindCSS. Criamos um nome para utilizarmos ela no TailwindCSS.

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Cápsula do tempo construída com Next.js, TypeScript e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticaded = cookies().has('token')
  // Se o token existir dentro dos cookies, o usuário estará autenticado.
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10  bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

            <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes"></div>

            {isAuthenticaded ? <Profile /> : <SignIn />}

            <Hero />

            <Copyright />
          </div>

          {/* Right */}
          {children}
        </main>
      </body>
    </html>
  )
}
