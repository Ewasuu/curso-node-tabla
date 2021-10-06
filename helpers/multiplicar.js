const fs = require('fs')
const colors = require('colors')
const fileWriter = ({numero = 1, limit = 10, listar}) =>{
    return new Promise((resolve, reject) => {
       listar? console.log('Creando tabla del: '.green, `${ numero }`.brightBlue) : ''
    let suma = ''

    for (let i = 0; i < limit; i++) {
        suma += `\n  ${numero} * ${i+1} = ${numero * (i + 1)} \n`
        listar? console.log(`\n ${numero}`.yellow.italic, 'X'.blue, `${i+1}`.yellow, '='.brightRed, `${numero * (i*1)}`.magenta) : ''
    }

    fs.writeFile(`./salida/tabla-${numero}.txt`, suma, (err)=>{
        if (err) reject(err)  

        resolve(numero)
    })
    })  
}

module.exports = { 
    fileWriter
}