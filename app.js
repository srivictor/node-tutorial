// manual aproach (create package.json in th root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newITems = _.flattenDeep(items)
console.log(newITems)