import gulp from 'gulp';
import browserSyncLib from 'browser-sync';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import ghPages from 'gulp-gh-pages';
import shell from 'gulp-shell';

const browserSync = browserSyncLib.create();
const sass = gulpSass(dartSass);

// СТИЛИ
export const styles = () => {
    return gulp.src("src/assets/sass/**/*.+(scss|sass)")
    .pipe(sass({
        outputStyle: 'compressed',
        silenceDeprecation: 'importSass'
    }).on('error', sass.logError))
    .pipe(rename({ prefix: "", suffix: ".min" }))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'], cascade: false }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(browserSync.stream());
};

// СЕРВЕР
export const server = () => {
    browserSync.init({
        server: { baseDir: "dist" },
        ui: false
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
};

// HTML
export const html = () => {
    return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
};

// PHP
export const php = () => {
    return gulp.src("src/**/*.php")
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
};

// JSON
export const json = () => {
    return gulp.src("src/**/*.json")
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
};

// ИКОНКИ
export const icons = () => {
    return gulp.src("src/assets/img/icons/**/*")
    .pipe(gulp.dest("dist/assets/img/icons"))
    .pipe(browserSync.stream());
};

// ШРИФТЫ
export const fonts = () => {
    return gulp.src("src/assets/fonts/**/*")
    .pipe(gulp.dest("dist/assets/fonts"))
    .pipe(browserSync.stream());
};

// MAILER
export const mailer = () => {
    return gulp.src("src/mailer/**/*")
    .pipe(gulp.dest("dist/mailer"))
    .pipe(browserSync.stream());
};

// ИЗОБРАЖЕНИЯ
export const images = () => {
    return gulp.src("src/assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/img"))
    .pipe(browserSync.stream());
};

// WEBPACK
export const webpack = shell.task(['webpack']);

// НАБЛЮДЕНИЕ
export const watch = () => {
    gulp.watch("src/assets/sass/**/*.+(scss|sass|css)", styles);
    gulp.watch("src/*.html", html);
    gulp.watch("src/**/*.php", php);
    gulp.watch("src/**/*.json", json);
    gulp.watch("src/assetsfonts/**/*", fonts);
    gulp.watch("src/assets/img/icons/**/*", icons);
    gulp.watch("src/assets/img/**/*", images);
};

// ДЕПЛОЙ
export const deploy = () => {
    return gulp.src('./dist/**/*')
    .pipe(ghPages({
        branch: 'newartem',
        remoteUrl: 'https://github.com/Grimdvl/newartem.git'
    }));
};

// ПО УМОЛЧАНИЮ
export default gulp.parallel(
    watch,
    server,
    styles,
    json,
    icons,
    mailer,
    html,
    php,
    images,
    fonts,
    webpack
);

