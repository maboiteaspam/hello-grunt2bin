
// this is a lambda cwd,
// where a lambda project belong
// and i want to use hello-grunt2bin here
// because it s somehow useful to me.

// This file is like a Gruntfile
// It will let me personalize hello-grunt2bin tasks
module.exports = {
  // This file should export
  // an Object with two keys.
  // config: To initialize or change the grunt config
  config: function(grunt) {
    // it s possible to hook into
    // hello-grunt2bin task very nicely, grunt is powerful

    // i can decide to merge,
    // or re init the config
    grunt.config.merge({
      'hello2': {
        options: {
          'user': 'xcv'
        }
      },
      'hello': {
        options: {
          'user': 'maboiteaspam'
        }
      }
    })
  },
  // run: To initialize or change the tasks workflow.
  run: function(main, grunt) {
    // It expects to use a Facade of grunt.
    // It helps to construct, update a workflow.
    var TasksWorkflow = require('../lib/tasks-workflow.js')

    // It is possible to replace the task,
    // or the target, like grunt
    main.replaceTarget('hello', 'target1',
      TasksWorkflow.createTask('hello2', 'target1', {
          options: {
            some: 'opts',
            user: '<%=user%>'
          }
      })
    )

    // It can also rewrite the whole workflow.
    //
    // main.skipAll()

    // Then creates a new workflow to replace
    // the deleted main workflow.
    //
    // TasksWorkflow()
    //  .appendTask( TasksWorkflow.createTask('hello2'))
    //  .packToTask('welcome',
    //  'Welcome user needs to get his user name first !`.'
    // ).appendTo(main);

    // obviously, we could do some stuff more advanced
    // to make that much more useful.

    // Note that grunt is available,
    // but so far, tasks are not yet registered
    // so you should not use it to registerTask.
    // But it still available so that you can get
    // access to the configuration.
  }
}
