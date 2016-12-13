module.exports = function(grunt) {
  grunt.initConfig({
    jsonschema_faker: {
      options: {
        indent: 2
      },
      target: {
        src: 'data/schema/format.json',
        dest: 'data/output/testdata.json'
      }
    },
    clean: {
      contents: ['data/output/*', 'node_modules/*']
    }
});

  // Load plugins
  grunt.loadNpmTasks('grunt-jsonschema-faker');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load task(s)
  grunt.registerTask('default', ['jsonschema_faker']);
  grunt.registerTask('done', ['clean']);
}
