const { src, dest, series, watch } = require('gulp');
const pug = require('gulp-pug');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
// const gulpif = require('gulp-if');
const webp = require('gulp-webp');
// const yargs = require('yargs').argv;

const clean = () => {
  return del(['build'])
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('build/resources'))
}

const html = () => {
  return src('src/pages/*.pug')
    .pipe(sourcemaps.init())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('build'))
}

const styles = () => {
  return src('src/styles/style.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      casecade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('build/styles'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
    'src/js/**/*.js',
  ])
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}

const sprites = () => {
  return src('src/img/svg/*.svg')
    .pipe (svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('build/img'))
}

const images = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/*.svg',
    'src/img/**/*.jpeg',
  ])
  .pipe(image({
    jpegRecompress: ['--strip', '--quality', 'medium' , '--min', 40, '--max', 80],
    mozjpeg: false,
  }))
  .pipe(webp())
  .pipe(dest('build/img'))
}

const resourcesImg = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/*.svg',
    'src/img/**/*.jpeg',
  ])
    .pipe(dest('build/img'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  })
}

watch('src/pages/**/*.pug', html)
watch('src/styles/**/*.scss', styles)
watch('src/img/svg/**/*.svg', sprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.styles = styles
exports.scripts = scripts
exports.html = html
exports.images = images
exports.sprites = sprites
exports.resourcesImg = resourcesImg
exports.default = series(resources, html, scripts, styles, images, resourcesImg, sprites, watchFiles)
