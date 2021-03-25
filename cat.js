const fs = require('fs')


if (process.argv.length < 3) {
  console.log(`Usage: node cat.js fileName`)
  process.exit(1)
}

for (i = 2; i < process.argv.length; i++) {
  const stats = fs.existsSync(process.argv[i]);
  if (!stats) {
    console.log(`One of the files doesn't exist`)
    process.exit(1)
  }
}

for (i = 2; i < process.argv.length; i++) {
  const stats = fs.existsSync(process.argv[i]);
  if (stats) {
    const fileContent = fs.readFileSync(process.argv[i], 'utf-8')
    console.log(fileContent)
  }
}