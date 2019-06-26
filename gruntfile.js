//https://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

module.exports = function (grunt) {
    
 // measures the time each task takes
  require('time-grunt')(grunt);     

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            scss: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'src/css',
                    ext: '.css'
              }]
            }
        },

        concat: {
            js: {
                src: ['src/js/**/*.js'], //any folder, any .js file
                dest: 'src/js/bundle.js',
            }
        },

        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img'
                }]
            }
        },
        
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'src/icons-source',
                    src: ['*.svg', '*.png'],
                    dest: "src/img/icons/"
                }],
                options: {
                }
            }
        },

        cssmin: {
            build: {
                src: 'src/css/main.css',
                dest: 'src/css/main.min.css'
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['src/*.html']
            }
        },

        connect: {
            dev: {
              options: {
                port: 9000,
                base: 'src',
                livereload: true
              }
            }
          },      

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            img: {
                files: ['src/img/*.*'],
                tasks: ['imagemin'],
            },
            html: {
                files: ['src/*.html'],
                tasks: ['htmlhint'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            js: {
                files: ['src/js/*.js'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            
        },
    });

    // 2. Load all Grunt tasks automatically 
    require('load-grunt-tasks')(grunt);

    // 3. Register tasks, default grunt task first
    grunt.registerTask(
        'default', [
                'sass',
                'cssmin',
                'imagemin',
                'htmlhint',
               // 'concat',
                'connect',
                'watch'
            ]
    );

};