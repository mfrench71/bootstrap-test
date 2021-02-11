module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    wait: {
      options: {
        delay: 1000
      },
      pause: {
        //
      },
    },
    watch: {
      sass: {
        files: "assets/scss/**/*.scss",
        tasks: ["sass"],
      },
      js: {
        files: "assets/js/src/*.js",
        tasks: ["babel", "wait", "uglify", "clean"],
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
    babel: {
      options: {  
        sourceMap: false,
        presets: ["@babel/preset-env", "minify"],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "assets/js/src",
            src: ["*.js", "!*.es5.js"],
            dest: "assets/js/src",
            ext: ".es5.js",
          },
        ],
      },
    },
    uglify: {
      options: {
        mangle: {
          toplevel: true,
        },
      },
      es5: {
        files: [
          {
            expand: true,
            cwd: "assets/js/src",
            src: ["*.es5.js"],
            dest: "assets/js/dist",
            ext: ".min.js",
          },
        ],
      },
      bootstrap: {
        files: {
          "assets/js/dist/bootstrap.min.js": [
            "node_modules/@popperjs/core/dist/umd/popper.js",
            "node_modules/bootstrap/js/dist/dom/data.js",
            "node_modules/bootstrap/js/dist/dom/event-handler.js",
            "node_modules/bootstrap/js/dist/dom/manipulator.js",
            "node_modules/bootstrap/js/dist/dom/selector-engine.js",
            "node_modules/bootstrap/js/dist/base-component.js",
            "node_modules/bootstrap/js/dist/alert.js",
            "node_modules/bootstrap/js/dist/button.js",
            "node_modules/bootstrap/js/dist/carousel.js",
            "node_modules/bootstrap/js/dist/collapse.js",
            "node_modules/bootstrap/js/dist/dropdown.js",
            "node_modules/bootstrap/js/dist/modal.js",
            "node_modules/bootstrap/js/dist/scrollspy.js",
            "node_modules/bootstrap/js/dist/tab.js",
            "node_modules/bootstrap/js/dist/toast.js",
            "node_modules/bootstrap/js/dist/tooltip.js",
            "node_modules/bootstrap/js/dist/popover.js",
          ],
        },
      },
    },
    clean: {
      es5: ['assets/js/src/**/*.es5.js']
    }
  });
  grunt.loadNpmTasks("grunt-wait");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Default tasks
  grunt.registerTask("default", ["sass", "babel", "wait", "uglify", "clean"]);
};
