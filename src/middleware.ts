import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
      },
    })
    // Retorna o usuário para a rota de login (loga automático) e, depois, para a rota que ele estava tentando acessar.
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
// PS:
// O matcher define em quais caminhos da minha aplicação eu quero disparar o middleware (verifica se o usuário está autenticado).
// O ":path*" significa que o usuário não pode acessar (sem estar autenticado) qualquer rota que começe com "/memories".
// O 'NextResponse.next()' só deixa o usuário seguir normalmente na rota.
// 'request.url' é a url que o usuário estava tentando acessar.
// O max-age só tem que ficar durante o tempo do login finalizar.
// O "HttpOnly" serve para que o usuário não possa ver o cookie pelo inspecionar elemento.
// Fluxo: Envio o usuário para a rota signInURL, que envia o usuário para a autenticação feita no "api/auth/callback/route.ts" e, depois de altenticado, volto o usuário para a página que ele estava tentando acessar.
