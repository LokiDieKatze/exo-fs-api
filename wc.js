const { readFileSync, statSync, existsSync } = require('fs')

// Vérifs
if (process.argv.length !== 3) {
  console.log('Usage: node wc.js fileName')
  process.exit(1)
}


if (!existsSync(process.argv[2])) {
  console.log(`${process.argv[2]}This file doesn't exist`)
  process.exit(1)
}

const File = statSync(process.argv[2])
if (!File.isFile()) {
  console.log('This is not a file')
  process.exit(1)
}

// Lire file.txt
const text = readFileSync(process.argv[2], 'utf-8')

// Split => 3 tableaux lignes mots caractères
const ligns = text.split('\n')
const words = text.split(' ')
const characters = text.split('')

//Affichage
console.log(`${ligns.length} ${words.length} ${characters.length} ${process.argv[2]}`)

