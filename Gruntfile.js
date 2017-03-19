module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-nodemon');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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

	grunt.registerTask('default', ['nodemon']);
};
