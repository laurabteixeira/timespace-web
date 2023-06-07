/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'localhost'],
  },
}
// Tem que passar esta configuração para que o Next carregue o avatarUrl do Github porque, por default, o <Image /> não carrega imagens de outros dominios.

module.exports = nextConfig
