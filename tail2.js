const { existsSync, readFileSync, statSync } = require('fs')

// vérif nb arguments et options
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('Usage: node tail.js option nbLigns fileName')
  process.exit(1)
} else if (process.argv.length === 5 && (process.argv[2] !== '-n' || isNaN(process.argv[3]))) {
  console.log('Usage: node tail.js option nbLigns fileName')
  process.exit(1)
}

// vérif si exists
if (!existsSync(process.argv[process.argv.length - 1])) {
  console.log('The file you want to read doesn\'t exist')
  process.exit(1)
}

// vérif if isFile
const stats = statSync(process.argv[process.argv.length - 1])
if (!stats.isFile()) {
  console.log('This is not a file')
  process.exit(1)
}

if (process.argv.length === 3) {
  let text = readFileSync(process.argv[2], 'utf-8')
  let tail = text.split('\n')
  for (i = (tail.length - 10); i < tail.length; i++) {
    console.log(tail[i])
  }
} else if (process.argv.length === 5 && process.argv[2] === '-n' && !isNaN(process.argv[3])) {
  let text = readFileSync(process.argv[4], 'utf-8')
  let tail = text.split('\n')
  for (i = (tail.length - process.argv[3]); i < tail.length; i++) {
    console.log(tail[i])
  }
}
