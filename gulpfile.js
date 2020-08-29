const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const styles = () => {
  return gulp.src("source/less/style.less")
.pipe(plumber())
.pipe(sourcemap.init())
.pipe(sass())
.pipe(postcss([
  autoprefixer()
]))
.pipe(sourcemap.write("."))
.pipe(gulp.dest("source/css"))
}
exports.styles = styles;
