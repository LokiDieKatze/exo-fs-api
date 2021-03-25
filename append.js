const { readFileSync, writeFileSync, existsSync, appendFileSync } = require('fs')

// Vérifier le nb d'arguments
if (process.argv.length < 4) {
  console.log('Usage: node cp.js sourceFileName destinationFileName')
  process.exit(1)
}

// Vérifier si fichiers existent
for (i = 2; i < (process.argv.length - 1); i++) {
  const stats = existsSync(process.argv[i])
  if (!stats) {
    console.log('The source file doesn\'t exist')
    process.exit(1)
  }
}

//regrouper les noms des fichiers source dans une string
let src = ''
for (i = 2; i < (process.argv.length - 1); i++) {
  src += readFileSync(process.argv[i])
}

// définir fichier destination + lire fichiers source + écrire dans dst sans écraser les données
const dst = process.argv[process.argv.length - 1]
const txt = readFileSync(src, 'utf-8')
writeFileSync(dst, txt, 'utf-8', { 'flags': 'w+' })

/* ou:
appendFileSync(process.argv[process.argv.length - 1], src)
*/