import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

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
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
