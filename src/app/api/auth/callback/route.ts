import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiresIn = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresIn}`,
    },
  })
}

// PS
// Esse método GET redireciona o usuário para outra URL quando ele clica em criar conta.
// searchParams são os parâmetros da URL (no caso, o code).
// O 'registerResponse' manda o código para o nosso backend. Não precisei escrever "http://localhost:3333/register" porque eu já escrevi o "http://localhost:3333" no meu api.ts.
// Se não existir o 'redirectTo' (para onde o usuário está querendo ir), o redirectURL redireciona o usuário para a rota raiz da aplicação.
// O token vai estar disponível em toda a aplicação (guardamos como cookie), por isso passamos '/' para o Path.
// O max-age define quanto tempo o cookie com o token vai ficar gravado no navegador. (Se não passar o max-age, quando recarregamos o navegador, o cooke expira).
