// under the hood it is all using regular grunt tasks
// just write them as usual under tasks/ folder.

module.exports = function (grunt){

  var inquirer = require('inquirer')
  grunt.registerMultiTask('confirm_username', function(){
    var done = this.async()
    inquirer.prompt([{
      type: "input",
      name: "user",
      message:'What is your username ?'
    }], function( answers ) {
      grunt.config.set('user', answers.user)
      done()
    });
  })

  grunt.registerMultiTask('hello', function(){
    var opts = this.options()
    console.log('hello the world from grunt2bin !')
    console.log('welcome %s ', opts.user)
    console.log('Your cwd is %s', process.cwd())
    console.log('Grunt has loaded a task from %s ', __dirname)
  })

  grunt.registerMultiTask('hello2', function(){
    var opts = this.options()
    console.log(opts)
    console.log('hello2')
  })

}
