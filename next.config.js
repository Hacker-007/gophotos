/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname:
					'api.gophotos.us',
				port: '',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
			},
		],
	},
}

module.exports = nextConfig
