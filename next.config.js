/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/photo-1500648767791-00dcc994a43e'
            }
        ]
    }
}

module.exports = nextConfig
