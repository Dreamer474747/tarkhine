/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		BASE_URL: process.env.BASE_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tarkhineh.armin-kosari.ir',
				port: '',
				pathname: '/media/Product-Images/**'
			},
		],
	},
};

export default nextConfig;
