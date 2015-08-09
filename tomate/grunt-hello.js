
// this is a lambda cwd,
// where a lambda project belong
// and i want to use hello-grunt2bin here
// because it s somehow useful to me.

// This file is a Gruntfile
// It will let me personalize hello-grunt2bin tasks
module.exports = function(grunt) {

  // it s possible to hook into
  // hello-grunt2bin task very nicely, grunt is powerfull

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

  // I can also perosnnalize the workflow
  grunt.registerTask('default', ['confirm_username', 'hello'])

  // even completely rewrite it.
  //grunt.registerTask('default', function(){
  //  console.log('hello the world from grunt2bin !')
  //})

  // obviously, we could do some stuff more advanced
  // to make that much more useful.

  // check the grunt doc

}
