const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = purgecss({
  content: ['./**/*.html', './node_modules/mdb-ui-kit/js/mdb.min.js'],
  css: ['./node-modules/mdb-ui-kit/**/*.css'],
})

module.exports = ({ env }) => ({
  plugins: [
    env === 'production' ? purgecssConfig : false,
  ]
})