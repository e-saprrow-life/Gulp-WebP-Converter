import gulp from "gulp";
import {deleteAsync} from 'del';
import webpConverter from 'gulp-webp';
import newer from 'gulp-newer';


const path = {
    src: './src',
    webp: './webp'
}


const webp_converter = () => {
    deleteAsync(`${path.webp}/**/*.*`)
    return gulp.src(`${path.src}/**/*.*` )
    .pipe(newer(path.webp))
    .pipe(webpConverter({ // Параметры: https://github.com/imagemin/imagemin-webp#imageminwebpoptions
        quality: 100
    }))
    .pipe(gulp.dest(path.webp))
}

export const start = gulp.series(webp_converter);