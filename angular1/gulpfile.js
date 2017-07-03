const gulp = require('gulp');
const klaw = require('klaw');
const util = require('gulp-util');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

//Task default que é chamada sempre que executar o comando do gulp no console
gulp.task('default', function(){    
    //Se na hora de executar o comando, tiver o --production conforme definido no json
    if(util.env.production){
        gulp.start('deps', 'app');
    }
    //Caso tiver em desenvolvimento, sobe o "server"" também para monitorar os arquivos
    else{
        gulp.start('deps', 'app', 'server');
    }
});