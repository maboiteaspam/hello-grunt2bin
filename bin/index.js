#!/usr/bin/env node

// hello-grunt2bin node binary file.

// here i can make use of commander/minimist to read cli switch.

// then let s load grunt2bin,
// which handles the bootstrap between this folder,
// and user cwd.

var grunt2bin = require('grunt2bin')

grunt2bin.handleProgram({
  // This function expects
  // an Object with two keys.
  // config: To initialize the grunt config
  config: function(grunt, cwd){
    // grunt practices as usual
    grunt.initConfig({
      'user': ''
    })
    // and also load my super tasks
    grunt.loadTasks('tasks')
    // This is a specific instruction,
    // It instructs to expose an additional Gruntfile to the end user.
    // The end user can now drop such file on his cwd to hook into the program.
    grunt.setUserGruntfile('grunt-hello.js')
  },
  // run: To initialize or change the tasks workflow.
  run: function(main, grunt, cwd){
    // main is a Facade of grunt.
    // It helps to construct, update a workflow.
    var TasksWorkflow = grunt2bin.TasksWorkflow

    // This is a tasks unit,
    // a task made of tasks.
    TasksWorkflow()
      .appendTask( TasksWorkflow.createTask('confirm_username'))
      .appendTask( TasksWorkflow.createTask('hello'))
      .packToTask('welcome',
      'Welcome user needs to get his user name first !`.'
      // main is then a workflow of many [tasks units].
    ).appendTo(main);

    // The idea behind that being that the end user
    // can now replace either the specific task:targets
    // or a complete [tasks unit] via their name.
  }
})
