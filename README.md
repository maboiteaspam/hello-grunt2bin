# hello-grunt2bin

grunt2bin sample.

# Installation

```npm i maboiteaspam/hello-grunt2bin -g```

# Usage

```
    hello
    
    options: -
```

# Configuration

Drop a file `grunt-hello.js` at root of your project 
to personalize and configure the task.

```js
module.exports = function(grunt) {
  grunt.config.merge({
    'hello': {
      options: {
        'user': 'maboiteaspam'
      }
    }
  })
}
```

#### Change the default workflow.

By default, this task is rather stupid and will just 
print out the name put in the configuration.

The personalization mechanism provided by the configuration is a first step that we can appreciate.

Let s make it even more personalized by taking advantage of task aliasing.

1. The module `hello-grunt2bin` exports a binary with this `default` pipeline.

```js
  grunt.registerTask('default', ['hello'])
```

2. It provides two tasks `['confirm_username', 'hello']`.

Within the `grunt-hello.js` file dropped at root of your project,
you can now proceed that way.

```js
  grunt.registerTask('default', ['confirm_username', 'hello'])
```

That will affect the pipeline, and introduce a new step to inquire username,
then re configure the `grunt` instance config to finally, execute `hello` task with
the right values, as we have desired.


# Notes

This was just a sample `README`, check more useful comments here
 https://github.com/maboiteaspam/hello-grunt2bin/blob/master/index.js


## License
See the [LICENSE](./LICENSE) file.
