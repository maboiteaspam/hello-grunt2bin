
// this is a lambda cwd,
// where a lambda project belong
// and i want to use hello-grunt2bin here
// because it s somehow useful to me.

// This file is like a Gruntfile
// It will let me personalize hello-grunt2bin tasks
module.exports = {

  // handleProgram expects
  // an Object with three keys.

  // compatible version with your program
  compat: '0.0.x',

  // grunt config to initialize or update
  config: function(grunt, cwd){

    // it s possible to hook into
    // hello-grunt2bin task very nicely, grunt is powerful

    /*
    you may want to load your user configuration
    before
     grunt.loadSystemUserGruntfile('config')
     */

    // i can decide to merge,
    grunt.config.merge({
      'task': {
        'options': {
          'set': 'the defaults that way'
        }
      }
    })
    // or re init the entire config,
    // it is not recommended.
    //grunt.initConfig({
    //  pkg: grunt.file.readJSON('package.json'),
    //  uglify: {
    //    options: {
    //      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //    },
    //    build: {
    //      src: 'src/<%= pkg.name %>.js',
    //      dest: 'build/<%= pkg.name %>.min.js'
    //    }
    //  }
    //})

    /*
     or after
     grunt.loadSystemUserGruntfile('config')
     */
    /*
     or not at all.
     */
  },

  // grunt tasks workflow to build
  run: function(main, grunt, cwd, TasksWorkflow){
    // It expects to use a Facade of grunt.
    // It helps to constructs, updates a workflow.

    /*
     you may want to load your user workflow changes before
     grunt.loadSystemUserGruntfile('run')
     */

    // It is possible to create, insert, replace, remove
    // tasks and targets
    TasksWorkflow()
      //.appendTask( TasksWorkflow.createTask('some target of '))
      //.appendTask( TasksWorkflow.createTask('loaded tasks'))
      .packToTask('as a new task unit',
      'with a description'
    ).appendTo(main);

    // It can also rewrite the whole workflow.
    //
    // main.skipAll()

    // Then creates a new workflow to replace
    // the deleted main workflow.
    //
    // TasksWorkflow()
    //  .appendTask( TasksWorkflow.createTask('hello2'))
    //  .packToTask('welcome',
    //  'This task inquire user to confirm the user name to use, then say hello.'
    // ).appendTo(main);

    // obviously, we could do some stuff more advanced
    // to make that much more useful.

    // Note that grunt is available,
    // but so far, tasks are not yet registered
    // so you should not use it to registerTask.
    // But it still available so that you can get
    // access to the configuration.

    /*
     or after grunt.loadSystemUserGruntfile('run')
     */
    /*
     or not at all.
     */
  }
};
