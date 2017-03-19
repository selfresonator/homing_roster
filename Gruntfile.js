module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

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
      },
      clientStyles: {
        files: 'public/scss/*.scss',
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'public/scss',
          cssDir: 'public/angular/app/styles',
          environment: 'development',
          watch: true
        },
      }
    },

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

  grunt.registerTask('spy', ['watch']);
  grunt.registerTask('default', ['nodemon:dev']);
};
