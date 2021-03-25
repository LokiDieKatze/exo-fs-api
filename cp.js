const { readFileSync, writeFileSync, existsSync } = require('fs')
const src = process.argv[2]
const dst = process.argv[3]



if (process.argv.length !== 4) {
  console.log('Usage: node cp.js sourceFileName destinationFileName')
  process.exit(1)
}

const stats = existsSync(src)
if (!stats) {
  console.log('The source file doesn\'t exist')
  process.exit(1)
}

const txt = readFileSync(src, 'utf-8')
writeFileSync(dst, txt)