/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['pbs.twimg.com', 'static-cdn.jtvnw.net'],
    },
    async rewrites() {
        return [{
            source: '/generator',
            destination: 'https://vtlore.herokuapp.com/generator',
        }, ];
    },
};

module.exports = nextConfig;