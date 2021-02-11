git-commands
---
nodejs操作git  
Execute git command using Node.js  

### Install
```sh
npm i git-commands --save
```

### Usage
```js
const Git = require('git-commands')
const git = new Git({ reps: 'your git repository path' })
```
```js
// status
console.log( git.command('status') )

// pull
console.log( git.command('pull') )

// checkout 
console.log( git.command('checkout master') )

// push
console.log( git.command('push origin master') )
```