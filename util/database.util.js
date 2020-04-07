const mysql = require('mysql')
const util = require('../config/database.config')

class Database {
    getConnection(){
        var connection = mysql.createConnection({
<<<<<<< HEAD
            host: 'localhost', 
            port :3306,
            user : 'root',
            password : 'Gtyhnbvfr@1',
            database : 'freecrm'
        })
        return connection;
||||||| merged common ancestors
            host        : util.host, 
            port        : util.port,
            user        : util.user,
            password    : util.password,
            database    : util.database
        });
        connection.connect()
        return connection
=======
            host: util.host, 
            port : util.port,
            user : util.user,
            password : util.password,
            database : util.database
        })
        return connection;
>>>>>>> 60e67e6d5861b008ebec9285bffd6779ad287b79
    }
<<<<<<< HEAD
    
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
||||||| merged common ancestors
}
=======
    
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
>>>>>>> 60e67e6d5861b008ebec9285bffd6779ad287b79
