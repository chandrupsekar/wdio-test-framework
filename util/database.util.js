const mysql = require('mysql')
const util = require('../config/database.config')

class Database {
    getConnection(){
        var connection = mysql.createConnection({
            host: util.host, 
            port : util.port,
            user : util.user,
            password : util.password,
            database : util.database
        })
        return connection;
    }
    
    retrieve = async function(tableName){
        const connection = this.getConnection()
        connection.connect()
        try{
            return new Promise((resolve, reject)=>{
                connection.query(`select * from ${tableName}`, function(err, result){
                    connection.end()
                    if(!err){ resolve(result) 
                    }else{reject(err)}
                })
            })
        }catch(err){
            console.log(err)
        }
    }

    // fetch = async tableName=>{
    //     try{
    //         await retrieve(dbConfig.tableName).then(result=>{
    //             arr = result
    //         })       
    //     }catch(err){
    //         console.log(err)
    //     }
    //     console.log('arr inside fetch')
    //     console.log(arr)
    //     return arr
    // }
    
    insert(tableName, values){
        const connection = this.getConnection()
        connection.connect()
        var query = connection.query(`insert into ${tableName} set ${value}`,(err, result)=>{
            if(err){
                console.error(err)
            }else{
                console.log(result)
            }
        })
        connection.end()
    }
    getMongoConnection(){
    }
}
module.exports = new Database()



// connection.query(`select * from ${tableName}`, function(err, result){
//     connection.end()
//     if(!err) console.log(result)
//     else{console.log(err)
//     }
// })