const mysql = require('mysql')
const util = require('../config/database.config')

class Database {
    getConnection(){
        var connection = mysql.createConnection({
            host        : util.host, 
            port        : util.port,
            user        : util.user,
            password    : util.password,
            database    : util.database
        });
        connection.connect()
        return connection
    }
}