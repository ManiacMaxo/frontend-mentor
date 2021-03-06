module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'IP Geolocation'
            return args
        })
    },

    publicPath:
        process.env.NODE_ENV === 'production'
            ? `/${process.env.npm_package_name}/`
            : '/'
}
