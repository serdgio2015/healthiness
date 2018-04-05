var gulp = require('gulp'),
	sass = require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
	browserSync = require('browser-sync');

    gulp.task('sass', function(){ // Создаем таск "sass"
        return gulp.src('app/sass/**/*.sass') // Берем источник
            .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
            .pipe(cssnano())
            .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browser Sync
            server: { // Определяем параметры сервера
                baseDir: 'app' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });

    gulp.task('watch', ['browser-sync', 'sass'], function() {
        gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
        gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
        gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    });



    gulp.task('default', ['watch']);