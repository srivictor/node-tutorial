const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',
`Hi there, this is the result : ${first}, ${second} \n`,
{flag: 'a'})

console.log('done with this task')
console.log('starting the next one')
