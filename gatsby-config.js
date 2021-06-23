module.exports = {
    plugins: [
        'gatsby-theme-docz',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                sassOptions: {
                    includePaths: ['src'],
                    camelCase: true,
                },
                cssLoaderOptions: {
                    camelCase: true,
                },
            },
        },

    ]
};
