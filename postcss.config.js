// module.exports = {
//   parser: 'sugarss',
//   plugins: {
//     'postcss-import': {},
//     'postcss-cssnext': {},
//     'autoprefixer': {
//       browsers: ['last 2 versions', 'dead', 'last 3 iOS versions', 'last 3 Android versions'],
//     },
//     'cssnano': {},
//   }
// };

module.exports = {
  plugins: [
    require('postcss-cssnext')({
      browserslist: [
        '> 1%',
        'last 2 versions',
        'dead',
        'last 3 iOS versions',
        'last 3 Android versions'
      ],
    }),
  ],
};
