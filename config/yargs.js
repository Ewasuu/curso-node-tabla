const colors = require('colors')
const yargs = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'Numero por el que se multiplicara'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    description: 'Numero hasta el que se multiplicara'
                })
                .option('l', {
                    alias: 'lista',
                    type: 'boolean',
                    default: false,
                    description: 'Mostrar o no mostrar en consola'
                })
                .check( (yargs, options) => {
                    if( isNaN( yargs.b ) ){ 

                        throw 'La base debe ser un numero'.brightRed
                    }
                    return true
                })
                .argv

module.exports = {
    yargs
}                