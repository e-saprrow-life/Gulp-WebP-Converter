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
        quality: 90,
        method: 4
    }))
    .pipe(gulp.dest(path.webp))
}

const clearSRC = async () => {
    deleteAsync(`${path.src}/**/*.*`)
    return null;
} 

export const start = gulp.series(webp_converter, clearSRC);