const { fileWriter } = require('./helpers/multiplicar')
const colors = require('colors')
const { yargs } = require('./config/yargs')
console.clear()
console.log('------------------------------*------------------------------'.rainbow)
console.log('------------------------------*------------------------------'.rainbow)
console.log('------------------------------*------------------------------'.rainbow)


fileWriter({numero: yargs.b,limit: yargs.h ,listar: yargs.l})
    .then(resolve => console.log('\n\n La tabla del'.green, `${resolve}`.brightBlue, 'se ha creado correctamente'.green))
    .catch(reject => console.log(`Ha habido un problema!!! \n`.red, reject.red))