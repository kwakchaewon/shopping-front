module.exports = {
    devServer: {
        proxy: {

            // api 주소 조회시 target 주소로 우회
            '/api': {
                target: 'http://localhost:8082',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}

//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true
//})
