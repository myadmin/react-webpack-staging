const proxySettings = {
    '/api/': {
        target: 'http://198.168.111.111:3001',
        changeOrigin: true,
    },
    '/api2/': {
        target: 'http://198.168.111.111:3002',
        changeOrigin: true,
        pathRewrite: {
            '^/api2': '',
        },
    },
};

module.exports = proxySettings;
