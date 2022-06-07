/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['pbs.twimg.com', 'static-cdn.jtvnw.net'],
    },
};

module.exports = nextConfig;