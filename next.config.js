/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname:
					'photographer-profile-pictures.s3.us-east-2.amazonaws.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'photographer-portfolios.s3.us-east-1.amazonaws.com',
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
