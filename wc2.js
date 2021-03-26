const { readFileSync, statSync, existsSync } = require('fs')

// Vérifs
if (process.argv.length !== 3 && process.argv.length !== 4) {
  console.log('Usage: node wc.js fileName')
  process.exit(1)
}


if (!existsSync(process.argv[process.argv.length - 1])) {
  console.log(`${process.argv[process.argv.length - 1]} doesn't exist`)
  process.exit(1)
}

const File = statSync(process.argv[process.argv.length - 1])
if (!File.isFile()) {
  console.log('This is not a file')
  process.exit(1)
}

// Lire file.txt
const text = readFileSync(process.argv[process.argv.length - 1], 'utf-8')

// Split => 3 tableaux lignes mots caractères
const ligns = text.split('\n')
const words = text.split(' ')
const characters = text.split('')

// cas par défaut:
if (process.argv.length === 3) {
  console.log(`${ligns.length} ${words.length} ${characters.length} ${process.argv[2]}`)
}

// Cas selon paramètre optionnel
if (process.argv.length === 4) {
  const option = process.argv[2]
  switch (option) {
    case '-l':
      console.log(`${ligns.length} ${process.argv[process.argv.length - 1]}`)
      break
    case '-w':
      console.log(`${words.length} ${process.argv[process.argv.length - 1]}`)
      break
    case '-c':
      console.log(`${characters.length} ${process.argv[process.argv.length - 1]}`)
      break
    default:
      console.log(`Please enter a valid option: -l, -w or -c`)
      break
  }
}

