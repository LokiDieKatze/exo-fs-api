const { existsSync, readFileSync } = require('fs')

if (process.argv.length < 3 || process.argv.length > 3) {
  console.log('Usage: node tail.js fileName')
  process.exit(1)
}

const stats = existsSync(process.argv[2])
if (!stats) {
  console.log('The file you want to read doesn\'t exist')
  process.exit(1)
} else {
  let text = readFileSync(process.argv[2], 'utf-8')
  let tail = text.split('\n')
  for (i = (tail.length - 10); i < tail.length; i++) {
    console.log(tail[i])
  }
}


