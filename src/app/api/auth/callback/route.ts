import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Esse método redireciona o usuário para outra URL quando ele clica em criar conta.
  const { searchParams } = new URL(request.url)
  // searchParams são os parâmetros da URL (no caso, o code).
  const code = searchParams.get('code')
  // Pega o código dos parâmetros da URL.

  const registerResponse = await api.post('/register', {
    code,
  })
  // Manda o código para o nosso backend. Não precisei escrever "http://localhost:3333/register" porque eu já escrevi o "http://localhost:3333" no meu api.ts.
  const { token } = registerResponse.data

  const redirectURL = new URL('/', request.url)
  // Redireciona o usuário para a rota raiz da aplicação. O 'request.url' contém a URL da minha aplicação.

  const cookieExpiresIn = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresIn}`,
      // O token vai estar disponível em toda a aplicação (guardamos como cookie), por isso passamos '/' para o Path.
      // O max-age define quanto tempo o cookie com o token vai ficar gravado no navegador. (Se não passar o max-age, quando recarregamos o navegador, o cooke expira).
    },
  })
}
