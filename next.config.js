// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
  
  
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig