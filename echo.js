if (process.argv.length < 3) {
  console.log(`Usage: node fileName your message`)
}

for (i = 2; i < process.argv.length; i++) {

  console.log(`${process.argv[i]}`)
}


