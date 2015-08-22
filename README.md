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

By default, may not do exactly the desired effects.

The personalization mechanism provided by the configuration is a first step that we can appreciate.

With help of tasks workflow, it is possible to update / rewrite the program workflow.

1. The module `grunt2bin` exports a main tasks workflow, the program workflow

```js
  var main = new TasksWorkflow()
```

2. The module `hello-grunt2bin` is invoked by `grunt2bin`

```js
grunt2bin.handleProgram({
  config: function(grunt, cwd){...}
  run: function(main){ ...}
})
```

2. It updates main program workflow and adds two tasks `['confirm_username', 'hello']`.

```js
grunt2bin.handleProgram({
  config: function(grunt, cwd){...}
  run: function(main){
  
    TasksWorkflow()
      .appendTask( TasksWorkflow.createTask('confirm_username'))
      .appendTask( TasksWorkflow.createTask('hello'))
      .packToTask('welcome',
      'tasks unit description'
    ).appendTo(main);
    
  }
})
```

3. Within the `grunt-hello.js` file dropped at root of your project,
   you can now proceed that way.

```js
grunt2bin.handleProgram({
  config: function(grunt, cwd){...}
  run: function(main){
  
    main.replaceTarget('hello', 'target1',
      TasksWorkflow.createTask('hello2', 'target1', {
          options: {
            some: 'opts',
            user: '<%=user%>'
          }
      })
    )
    
  }
})
```


That will affect the pipeline, and introduce a new step to inquire username,
then re configure the `grunt` instance config to finally, execute `hello` task with
the right values, as we have desired.


# Notes

This was just a sample `README`, check more useful comments here
 https://github.com/maboiteaspam/hello-grunt2bin/blob/master/index.js


## License
See the [LICENSE](./LICENSE) file.
