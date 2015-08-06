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

```
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

# Notes

This was just a sample `README`, check more useful comments here
 https://github.com/maboiteaspam/hello-grunt2bin/blob/master/index.js


## License
See the [LICENSE](./LICENSE) file.
