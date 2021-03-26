const { readFileSync, writeFileSync, existsSync, statSync } = require('fs')
const src = process.argv[2]
const dst = process.argv[3]

// vérif nb arguments
if (process.argv.length !== 4) {
  console.log('Usage: node cp.js sourceFileName destinationFileName')
  process.exit(1)
}

// vérif exist
const statSrc = existsSync(src)
const File = statSync(src)
if (!statSrc) {
  console.log('The source file doesn\'t exist')
  process.exit(1)
} else if (!File.isFile()) {
  console.log(`Please enter a file as source`)
  process.exit(1)
}

// Exécution du programme
const txt = readFileSync(src, 'utf-8')
writeFileSync(dst, txt, { flag: 'a' })
