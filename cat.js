const fs = require('fs')

// vérif nb arguments
if (process.argv.length < 3) {
  console.log(`Usage: node cat.js fileName`)
  process.exit(1)
}

// vérif si exists et isFile
for (i = 2; i < process.argv.length; i++) {
  const stats = fs.existsSync(process.argv[i]);
  if (!stats) {
    console.log(`One of the files doesn't exist`)
    process.exit(1)
  }
  const File = fs.statSync(process.argv[i])
  if (!File.isFile()) {
    console.log('Please enter only files')
    process.exit(1)
  }
}

// Affichage
for (i = 2; i < process.argv.length; i++) {
  const fileContent = fs.readFileSync(process.argv[i], 'utf-8')
  console.log(fileContent)
}