const { src, dest, watch, series } = require("gulp");
var browserSync = require("browser-sync").create();

function browserInit() {
  browserSync.init({
    server: {
      baseDir: "dist",
      index: "layout.html",
    },
  });
}

function moveHtml() {
  return src("src/**/*.html") // change to your source directory
    .pipe(dest("dist/")) // change to your final/public directory
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function moveCss() {
  return src("src/css/**/*.css") // change to your source directory
    .pipe(dest("dist/css")) // change to your final/public directory
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function processJsFiles() {
  return src("src/js/**/*.js") // change to your source directory
    .pipe(dest("dist/js")) // change to your final/public directory
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function moveImages() {
  return src("src/images/**/*.{jpg,png}") // change to your source directory
    .pipe(dest("dist/images")) // change to your final/public directory
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

//watchtask
function watchTask() {
  watch("src/**/*", browserInit);
  watch("src/js/**/*.js", processJsFiles);
  watch("src/css/**/*.css", moveCss);
  watch("src/**/*.html", moveHtml);
  watch("src/images/**/*.{jpg,png}", moveImages);
}

// Default Gulp task
exports.default = series(watchTask);
