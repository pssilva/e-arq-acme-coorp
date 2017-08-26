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
        watch: {
            express: {
              files:  [ '**/*.js' ],
              //tasks:  [ 'express:admin','express:avaliacao','express:restful' ],
              options: {
                spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
              }
            }
        },
        express: {
            options: {
                livereload: true
            },
            admin: {
                  options: {
                    port: 3034,
                    bases: 'app/admin',
                    script: 'app/admin/server/config/server.js', // acessa o arquivo: server.js
                    node_env: 'development'
                  }
            },
            avaliacao: {
                  options: {
                    port: 3045,
                    bases: 'app/avapliacao',
                    script: 'app/avaliacao/server/config/server.js', // acessa o arquivo: server.js
                    node_env: 'development'
                  }
            },
            restful: {
                  options: {
                    port: 3034,
                    bases: 'app/core',
                    script: 'app/core/server/config/server_api_restful.js' , // acessa o arquivo: server.js
                    node_env: 'development'
                }
            }
        }
    });
    
    // [3] Load all plug-in tasks automatically 
    require('load-grunt-tasks')(grunt); 
    
    grunt.loadNpmTasks('grunt-contrib-connect'); 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-parallel'); 
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('myServer', ['express-keepalive']); 
    grunt.registerTask('adminServer', ['express:admin']); 
    grunt.registerTask('avaliacaoServer', ['express:avaliacao']); 
    grunt.registerTask('restfulServer', ['express:restful']); 

    // [4] Default task 
    grunt.registerTask('default', ['adminServer', 'avaliacaoServer', 'restfulServer', 'watch']);

};



