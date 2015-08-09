module.exports = function (grunt){

  var inquirer = require('inquirer')
  grunt.registerTask('confirm_username', function(){
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

  grunt.registerTask('hello', function(){
    var opts = this.options()
    console.log('hello the world from grunt2bin !')
    console.log('welcome %s ', opts.user)
    console.log('Your cwd is %s', process.cwd())
    console.log('Grunt has loaded a task from %s ', __dirname)
  })

}
