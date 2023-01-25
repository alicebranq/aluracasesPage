
module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/perguntas', 
                destination: '/faq/',
                permanent: true,
                //automaticamente redireciona p/ faq
            },
            {
                source: '/home',
                destination: '/',
                permanent: true,
            }
        ]
    },
}

