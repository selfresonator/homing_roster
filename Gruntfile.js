module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      clientjs: {
        files: [
          'public/angular/app/*.js',
          'public/angular/app/links/*.js',
          'public/angular/app/links/links.js',
          'Gruntfile.js'
        ],
      },
      clienthtml: {
        files: [
          'public/angular/app/*.html',
          'public/angular/app/links/*.html',
        ],
      },
      clientStyles: {
        files: [
          'public/scss/*.scss',
        ],
        tasks: ['clean','compass:dev','postcss:dist', 'cssmin:links']
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'public/scss',
          cssDir: 'public/angular/app/styles',
          environment: 'development',
        //   watch: true
        },
      }
    },

    postcss: {
        options: {
            processors: [
                require('autoprefixer')(),
            ]
        },
        dist: {
            src: 'public/angular/app/styles/links.styles.css',
            dest: 'public/angular/app/styles/links.styles.css'
        }
    },

    cssmin: {
      links: {
        files: [{
            expand: true,
            cwd: 'public/angular/app/styles',
            src: ['*.css', '!.min.css'],
            dest: 'public/angular/app/styles',
            ext: '.styles.min.css'
        }]
      }
    },

    imagemin: {
      links: {
        options: {
          optimizationLevel: 6
        },
        files: [{
          expand: true,
          cwd: 'public/angular/app/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/angular/app/img'
        }]
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
    },

    clean: ['public/angular/app/styles/links.styles.min.css']
  });

  grunt.registerTask('spy', ['watch']);
  grunt.registerTask('default', ['nodemon:dev']);
};
