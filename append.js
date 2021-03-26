const { readFileSync, writeFileSync, existsSync, statSync, appendFileSync } = require('fs')

// Vérifier le nb d'arguments
if (process.argv.length < 4) {
  console.log('Usage: node cp.js sourceFileName destinationFileName')
  process.exit(1)
}

// Vérifier si fichiers existent et si isFile

for (i = 2; i < (process.argv.length - 1); i++) {
  const stats = existsSync(process.argv[i])
  if (!stats) {
    console.log('The source file doesn\'t exist')
    process.exit(1)
  }
  const File = statSync(process.argv[i])
  if (!File.isFile()) {
    console.log(`Please enter only files as a source`)
    process.exit(1)
  }
}

//regrouper les noms des fichiers source dans une string
let text = ''
for (i = 2; i < (process.argv.length - 1); i++) {
  text += readFileSync(process.argv[i], 'utf-8')
}

// définir fichier destination + lire fichiers source + écrire dans dst sans écraser les données
const dst = process.argv[process.argv.length - 1]
writeFileSync(dst, text, { flag: 'a' })

/* ou:
appendFileSync(process.argv[process.argv.length - 1], text)
*/
