
module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
            options: {
                nospawn: true
            },
            src: {
                files: ['*.coffee'],
                tasks: ['coffee']
            }
        },
		coffee: {
			default: {
				expand: true,
				cwd: __dirname,
				src: ['*.coffee'],
				dest: 'bin',
				ext: '.js',
				options: {
					bare: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['coffee']);
};