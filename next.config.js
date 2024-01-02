const withTM = require('next-transpile-modules')([
  '@react-email/render',
  'html-to-text',
  'entities',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io', 'res.cloudinary.com'],
  },
};

module.exports = withTM(nextConfig);
