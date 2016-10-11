
module.exports = function (grunt)
{

    grunt.initConfig({


        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    "prod/app.js": "src/app.js"
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './prod/css/main.css': './src/sass/main.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'prod/css/main.css':'prod/css/main.css'
                }
            }
        },
        watch: {
            files: ['src/sass/*.scss', 'src/app.js'],
            tasks: ['build']
        },
        browserSync: {
            bsFiles: {
                src : ['./prod/css/**/*.css', 'index.html']
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');


    grunt.registerTask('build:js',['babel']);
    grunt.registerTask('build',['build:js', 'build:css' ]);
    grunt.registerTask('build:css',['sass','autoprefixer']);
    grunt.registerTask("default", [ 'browserSync', 'watch']);
};