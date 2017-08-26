// [1] Wrapper function
module.exports = function(grunt) {
    // var mongoose = require('./app/core/server/config/mongoose'),
    //     express = require('./app/core/server/config/express');

    // Load time-grunt to measure performance
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // [2] Project and task configuration 
    grunt.initConfig({
        // Project settings
        yeoman: appConfig,

        pkg: grunt.file.readJSON('package.json'),
        express: {
            admin: {
                //custom: {
                  options: {
                    port: 3034,
                    //bases: 'www-root',
                    server: './app/admin/server/config/server' // acessa o arquivo: server.js
                  }
                //}
            },
            avaliacao: {
                //custom: {
                  options: {
                    port: 3045,
                    //bases: 'www-root',
                    server: './app/avaliacao/server/config/server' // acessa o arquivo: server.js
                  }
                //}
            },
            restful: {
                //custom: {
                  options: {
                    port: 3034,
                    //bases: 'www-root',
                    server: './app/core/server/config/server_api_restful' // acessa o arquivo: server.js
                  //}
                }
            }
        }
    });
    
    // [3] Load all plug-in tasks automatically 
    require('load-grunt-tasks')(grunt); 
    
    grunt.loadNpmTasks('grunt-contrib-connect'); 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-parallel'); 

    grunt.registerTask('myServer', ['express-keepalive']); 
    grunt.registerTask('adminServer', ['express:admin:custom']); 
    grunt.registerTask('avaliacaoServer', ['express:avaliacao:custom']); 
    grunt.registerTask('restfulServer', ['express:restful:custom']); 

    // [4] Default task 
    grunt.registerTask('default', ['adminServer', 'avaliacaoServer', 'restfulServer']);

};



