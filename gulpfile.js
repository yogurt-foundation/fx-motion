const autoPrefixer = require('autoprefixer')
const concat = require('gulp-concat')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')


// ...minify/preprocess scss
const srcScssPath = 'src/fx.scss'
const distCssPath = 'dist'
gulp.task('sass', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(gulp.dest(distCssPath))
})


// ...watch
const watchSrcScssPath = 'src/assets/scss/**/*.scss'
gulp.task('watch', gulp.series([

    'sass',

  ], () => {

    gulp.watch(watchSrcScssPath,
      gulp.series(['sass']))

  })

)
