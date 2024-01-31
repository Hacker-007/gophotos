/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname:
					'api.gophotos.us',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
}

module.exports = nextConfig
