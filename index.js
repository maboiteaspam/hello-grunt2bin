#!/usr/bin/env node

// hello-grunt2bin node binary file.

// here i can make use of commander/minimist to read cli switch.

// then let s load grunt2bin,
// which handles the bootstrap between this folder,
// and user cwd.
require('grunt2bin')(function(grunt, cwd){
  // let s init a default config for my super task
  grunt.initConfig({
    'hello': {
      options: {
        'user': 'put your username here'
      }
    }
  })
  // load my super task
  grunt.loadTasks('tasks')
  // set it as default, it s the task grunt2bin will try to run
  grunt.registerTask('default', ['hello'])
  // expose an additional Gruntfile to the end user
  // so he can hook into my super task
  grunt.setUserGruntfile('grunt-hello.js')
})
