module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    source: 'src',
    test: 'test',
    temp: '.tmp',
    bower: 'bower_components',

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    },

    exec: {
      check_for_mxmlc: {
        cmd: 'mxmlc --version',
        callback: function(error) {
          if (error) {
            grunt.log.writeln("Couldn't find Flex SDK on your path!");
            grunt.log.writeln('You can download it here: http://sourceforge.net/adobe/flexsdk/wiki/Flex%20SDK/');
          }
        }
      },

      build_tests: {
        cmd: [
          'mxmlc',
          '<%= test %>/Runner.as',
          '-benchmark',
          '-output <%= temp %>/tests.swf',
          '-source-path+=<%= source %>',
          '-source-path+=<%= bower %>/asunit/asunit-3.0/src',
          '-static-link-runtime-shared-libraries=true'
        ].join(' ')
      }
    },

    connect: {
      options: {
        hostname: "*",
        port: 9001,
        keepalive: true,
        open: "http://localhost:<%= connect.options.port %>/tests.swf"
      },
      tests: {
        options: {
          base: [
            "<%= temp %>",
          ]
        }
      }
    }

  });

  grunt.registerTask('default', ['test']);

  grunt.registerTask('test', [
    'exec:check_for_mxmlc',
    'exec:build_tests',
    'connect:tests'
  ]);

};
