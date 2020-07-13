module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api*': {
            // Forward frontend dev server request for /api to django dev server
            target: 'http://localhost:8000/',
            }
        }
    }
}