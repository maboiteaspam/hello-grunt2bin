module.exports = function (grunt){
  grunt.registerTask('hello', function(){
    var opts = this.options()
    console.log('hello the world from grunt2bin !')
    console.log('welcome %s ', opts.user)
    console.log('Your cwd is %s', process.cwd())
    console.log('Grunt has loaded a task from %s ', __dirname)
  })
}
