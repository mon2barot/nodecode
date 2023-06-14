/*
const amount = 2

if (amount >= 12){
    console.log('Big Number')
}
else{
    console.log('Small Number')
}

console.log('Hello World')
*/

// console.log(__dirname)

/*
const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) =>{
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)
*/

// const names = require('./names');
// const sayHi = require('./func');
// const items = require('./altflav');
// const fsSync = require('./fs-sync');
// const { flattenDeep } = require('lodash');

// require('./mindgrenade')

// console.log(names)
// console.log(items.items)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
console.log(items)
const newItems = _.flattenDeep(items)
console.log(newItems)