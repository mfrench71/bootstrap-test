module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            sass: {
                files: "assets/scss/**/*.scss",
                tasks: ["sass"],
            },
        },
        sass: {
            options: {
                style: "compressed",
            },
            external: {
                files: [
                    {
                        expand: true,
                        cwd: "assets/scss",
                        src: ["*.scss"],
                        dest: "assets/css",
                        ext: ".min.css",
                    },
                ],
            },
            inline: {
                files: [
                    {
                        expand: true,
                        cwd: "assets/scss/inline",
                        src: ["*.scss"],
                        dest: "assets/css/inline",
                        ext: ".min.css",
                    },
                ],
            },
        },
        uglify: { 
            options: {
                mangle: {
                    toplevel: true
                }
            },
            base: {
                files: [
                    {
                        expand: true,
                        cwd: "assets/js/src",
                        src: ["*.js"],
                        dest: "assets/js/dist",
                        ext: ".min.js",
                    }
                ]
            }
        },
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    // Default tasks
    grunt.registerTask("default", ["sass", "uglify"]);
};
