const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")

function converteSass() {
    return gulp.src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/styles"))
}

exports.build = gulp.parallel(converteSass)

exports.default = function(){
    gulp.watch("./src/styles/*.scss", 
	{ ignoreInitial: false },
	gulp.series(converteSass))
}