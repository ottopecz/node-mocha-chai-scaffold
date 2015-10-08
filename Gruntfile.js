module.exports = function(grunt) {

  grunt.initConfig({
      babel: {
          dist: {
              files: [
                  {
                      expand: true,
                      cwd: "lib/",
                      src: ["**/*.es6"],
                      dest: "dist/",
                      ext: ".js",
                      extDot: "first"
                  },
                  {
                      expand: true,
                      cwd: "tests/lib",
                      src: ["**/*.spec.es6"],
                      dest: "tests/dist/",
                      ext: ".spec.js",
                      extDot: "first"
                  }
              ]
          }
      },
      mochaTest: {
          test: {
              src: ["tests/dist/**/*.spec.js"]
          }
      }
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-mocha-test");

  grunt.registerTask("default", ["babel", "mochaTest"]);
};
