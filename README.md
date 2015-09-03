# hello-grunt2bin

`grunt2bin` demo. This repo demonstrate how we can take advantage of 
`grunt` within a node package installed globally.

See also https://github.com/maboiteaspam/grunt2bin

# Installation

```npm i maboiteaspam/hello-grunt2bin -g```

# Usage

```
    hello : Prints out the username.
    
    options: -
```

# Configuration

Drop a file `grunt-hello.js` at root of your project 
to personalize and configure the task.

```js
module.exports = {
  config: function(grunt) {
    grunt.config.merge({
      'hello': {
        options: {
          'user': 'maboiteaspam'
        }
      }
    })
  }
}
```

#### Change the default workflow.

By default, the program may not implement the workflow of your dreams.

The personalization mechanism provided by the configuration is a first step that we can appreciate.

With help of `TasksWorkflow`, it is possible to update / rewrite the program workflow.


The process happens that way:

1. The module `grunt2bin` exports a new instance of `TasksWorkflow`, main, the `default` one

```js
  var main = new TasksWorkflow()
```

2. The module `hello-grunt2bin` is invoked by `grunt2bin`

```js
grunt2bin.handleProgram({
  config: function(grunt, cwd){...}
  run: function(main, grunt, cwd, TasksWorkflow){ ...}
})
```

2. The module `hello-grunt2bin` updates the main program workflow 
and adds two tasks `['confirm_username', 'hello']`.

```js
var TasksWorkflow = grunt2bin.TasksWorkflow

grunt2bin.handleProgram({
  config: function(grunt, cwd){...}
  run: function(main, grunt, cwd, TasksWorkflow){
  
    TasksWorkflow()
      .appendTask( TasksWorkflow.createTask('confirm_username'))
      .appendTask( TasksWorkflow.createTask('hello'))
      .packToTask('welcome',
      'tasks unit description'
    ).appendTo(main);
    
  }
})
```

3. Now you can declare a file `hello-grunt2bin.js` at `cwd`
   and proceed that way.

```js
module.exports = {
  config: function(grunt, cwd){...}
  run: function(main, grunt, cwd, TasksWorkflow){
  
    main.replaceTarget('hello', '_0target',
      TasksWorkflow.createTask('hello2', 'whatever', {
          options: {
            some: 'opts',
            user: '<%=user%>'
          }
      })
    )
    
  }
}
```

That will update the workflow by replacing
`hello:_0target` task with `hello2:whatever`.

Don't forget to check and review the workflow with `--describe` argument

```
HELLO-GRUNT2BIN
to write

Tasks configured for this module:

 - WELCOME
   This task inquire user to confirm the user name to use, then say hello.

   Alias of
    - confirm_username:_0target
    - hello:_1target
```

# Notes

This was just a sample `README`, check more useful comments here
 https://github.com/maboiteaspam/hello-grunt2bin/blob/master/bin/index.js


## License
See the [LICENSE](./LICENSE) file.
