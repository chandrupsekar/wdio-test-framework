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
    
    retrieve(){
        const connection = this.getConnection()
        connection.connect();
        var query= connection.query('select * from articles', function(err, result){
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        })
        connection.end()
    }
    
    insert(){
        const connection = this.getConnection()
        connection.connect();
        var article={
            author : 'Shree Ramchandra',
            title : 'Node tutorial',
            body: 'foo bar'
        }
        var query = connection.query('insert into articles set ?', article, (err, result)=>{
            if(err){
                console.error(err)
            }else{
                console.log(result);
            }
        })
        connection.end()
    }
}

module.exports = new Database()
