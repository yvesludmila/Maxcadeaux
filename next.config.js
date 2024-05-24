module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['reqres.in'],
    },
    async rewrites() {
        return [
            {
                source: '/api/getIpInfo',
                destination: 'https://ipinfo.io/json?token=0567502d77f05a',
            },
        ];
    },
};