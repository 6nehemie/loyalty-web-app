/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
  },
  //   async redirects() {
  // 	return [
  // 	  {
  // 		source: '/blog',
  // 		destination: '/',
  // 		permanent: true,
  // 	  },
  // 	]
  //   },
};

module.exports = nextConfig;
