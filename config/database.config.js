module.exports ={
    host        : 'localhost',
    port        : 3306,
    database    : 'freecrm',
    user        : 'root',
    password    : 'Gtyhnbvfr@1',
    tableName   : 'contact'
}

// const Sequelize = require('sequelize')

// module.exports = new Sequelize('freecrm', 'root', 'Gtyhnbvfr@1', {
//     host: 'localhost',
//     dialect : 'mysql',
//     operatiorAliases: false,
//     pool : {
//         max : 5, 
//         min : 0, 
//         acquire: 30000,
//         idle : 10000
//     }, 
//     define: {
//         timestamps : false
//     }
// }) 