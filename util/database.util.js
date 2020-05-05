const mysql = require('mysql')
const util = require('../config/database.config')
// const db = require('../config/database.config')
// const Contacts = require('../Sequelize/model/Contact')
class Database {
    // getConnection(){
    //     db.authenticate()
    //     .then(()=>console.log('Database connected'))
    //     .catch(err=> console.log(err))
    // }

    // retrieve(){
    //     Contacts.findAll().then(res=>{
    //         console.log('Trying to print contact  '+res[0].title)
    //     }).cathc(err=> console.log(err))
    // }
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
        console.log('inside retrieve') 
        return new Promise((resolve, reject)=>{
            connection.query(`select * from ${tableName}`, function(err, result){
                connection.end()
                if(result === undefined){
                    reject(new Error('Error rows is undefined'))
                }
                else{ 
                    resolve(result)
                }
            })
        })
        // console.log('inside db.util')
        // console.log(arr)
        // console.log(typeof arr)
        // return arr
    }

    returnArray = async ()=>{
        var arr = []
        
        await db.retrieve('contacts').then(results=>{
            console.log(results)
        }).catch(err=>{
            console.log('Promise  rejection error : ' + err)
        })
        //console.log(arr)
    }

    // retrieve(){
    //     const connection = this.getConnection()
    //     connection.connect();
    //     var query= connection.query('select * from articles', function(err, result){
    //         if(err){
    //             console.log(err)
    //             return
    //         }
    //         console.log(result);
    //     })
    //     connection.end()
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


    // retrieve = async function(tableName){
    //     const connection = this.getConnection()
    //     connection.connect()
    //     console.log('inside retrieve') 
    //     var arr = []  
    //     await new Promise((resolve, reject)=>{
    //         connection.query(`select * from ${tableName}`, function(err, result){
    //             console.log('connection end')
    //             connection.end()
    //             console.log('connection end')
    //             if(err) reject(err)
    //             else resolve(result)
    //         })
    //     }).then(result=>{
    //         console.log(result)
    //         arr = result.map(row=>{
    //             const obj = {
    //                 username : row.username,
    //                 firstname: row.firstname,
    //                 lastname : row.lastname,
    //             }
    //             console.log(row)
    //             return obj;
    //         })
    //     }).catch(err=>{console.error( err)})

    //     console.log('inside db.util')
    //     console.log(arr)
    //     console.log(typeof arr)
    //     return arr
    // }    
    // insert(tableName, values){
    //     const connection = this.getConnection()
    //     connection.connect()
    //     var arr = [];
    //     var query = connection.query(`insert into ${tableName} set ${value}`, (err, result)=>{
    //         if(err){
    //             console.error(err)
    //         }else{
    //             arr = result
    //         }
    //     })
    //     connection.end()
    //     //console.log(arr)
    //     return arr
    // }
    // getMongoConnection(){
    // }