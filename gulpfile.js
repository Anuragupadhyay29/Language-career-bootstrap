// Create the variables we require
var gulp = require("gulp");

var concat = require("gulp-concat");
var minify = require("gulp-minify-css");
//var uglify = require('gulp-uglify');
var uglify = require("gulp-uglify-es").default;
var sass = require("gulp-sass");

// Task to compile the SASS and then minify the CSS (ready for production)
/*gulp.task('css', function(){
    gulp.src('themes/custom/arderofficial/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('stylesheet.min.css'))
    //.pipe(minify())
    .pipe(gulp.dest('themes/custom/arderofficial/css'))
});*/
gulp.task("css", (done) => {
  gulp
    .src("themes/custom/arderofficial/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    //.pipe(minify())
    .pipe(gulp.dest("themes/custom/arderofficial/css"));
  done();
});
// Task to minify the JS
gulp.task("js", function () {
  /*gulp.src('application/themes/arden/js/production.js')
   .pipe(concat('production.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('application/themes/arden/js/'));*/
});
gulp.task("js2", (done) => {
  /* gulp.src('themes/custom/arderofficial/js/javascript.js')
   .pipe(concat('javascript.min.js'))
   //.pipe(uglify())
    .pipe(uglify().on('error', function(e){
        console.log(e);
    }))
   .pipe(gulp.dest('themes/custom/arderofficial/js/'));
*/
  gulp
    .src([
      "themes/custom/arderofficial/js/javascript.js",
      "themes/custom/arderofficial/js/dialog_box.js",
      "themes/custom/arderofficial/js/rTapTrack.js",
    ])
    .pipe(concat("javascript.min.js"))
    .pipe(
      uglify().on("error", function (e) {
        console.log(e);
      })
    )
    .pipe(gulp.dest("themes/custom/arderofficial/js/"));
  done();
});

/*
gulp.task('default', ['css', 'watch'], done => {
  gulp.watch('themes/custom/arderofficial/*.scss',['css']);
  done();
});
*/

gulp.task("watch", (done) => {
  gulp.watch("themes/custom/arderofficial/scss/**/*.scss", gulp.series("css"));
  done();
});
