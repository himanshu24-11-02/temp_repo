// modules are the encapsulated code 
// common js- every js is a module 

const names = require ('./names')
const sayHi = require ('./utils')
const data = require ('./alternative-flavour')
require('./mind-grenade')
console.log(data)


sayHi("blas bla ")
sayHi(names.john)