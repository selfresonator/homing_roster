module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      clientViews: {
        files: [
          'public/angular/app/*.js',
          'public/angular/app/*.html',
          'public/angular/app/links/*.js',
          'public/angular/app/links/*.html',
          'Gruntfile.js'
        ]
      }
    },

    // concat: {
    //   dist: {
    //     src: [
    //       'bower_components/angular/angular.min.js',
    //       'bower_components/angular-route/angular-route.min.js',
    //       'public/angular/app/app.js',
    //       'public/angular/app/app.config.js',
    //       'public/angular/app/app.routes.js',
    //       'public/angular/app/app.constants.js',
    //       'public/angular/app/links/links.controller.js'
    //     ],
    //     dest: 'public/angular/app/dist/build.js'
    //   }
    // },

    nodemon: {
      dev: {
        script: 'app.js',
        env: {
          PORT: 3000
        },
        watch: ['server'],
      }
    }
  });

  // grunt.registerTask('build', [
  //   'concat:dist',
  //   // 'concat:jsmodules'
  // ]);

  grunt.registerTask('spy', ['watch']);
  grunt.registerTask('default', ['nodemon:dev']);
};
