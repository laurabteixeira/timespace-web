import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('oi')
}

export const config = {
  matcher: '/memories/:path*',
}
// PS:
// O matcher define em quais caminhos da minha aplicação eu quero disparar o middleware (verifica se o usuário está autenticado).
// O ":path*" significa que o usuário não pode acessar (sem estar autenticado) qualquer rota que começe com "/memories".
