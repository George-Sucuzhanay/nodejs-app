// each file is called a module in Node.js

// this is required to use environmental variables
require('dotenv').config();

const firstName = process.env.FIRST_NAME;
const lastName = process.env.ALIAS;

console.log(firstName)
console.log(lastName)
const addFunction = function (a,b){
    console.log(a + b);
}
addFunction(2,3)

module.exports.addFunction = addFunction;


