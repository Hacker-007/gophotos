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
			{
				protocol: 'https',
				hostname: 'photographer-pictures.s3.us-east-2.amazonaws.com',
			},
		],
	},
}

module.exports = nextConfig
