const {readFileSync,writeFileSync} = require('fs');
// const fs = require('fs')
// fs.readFileSync 

const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')
console.log(first,second)

writeFileSync('./content/subfolder/result-sync.txt',
`copy from first and second text: ${first} ${second}`,{flag: 'a'})
//flag a is for appending, by deafault its overriding the text 