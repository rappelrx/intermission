module.exports = {
    plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
      require('cssnano')({
        preset: ['default', {
          discardComments: {
            removeAll: true,
            exclude: /^!/  // Preserve comments that start with `!`
          }
        }]
      })
    ]
  }
  