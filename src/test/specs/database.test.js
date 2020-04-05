<<<<<<< HEAD
const dbase = require('../../../util/database.util')

//before hook is used before every describe block
describe('Database Connectivity', ()=>{
    it('fetching data from database', ()=>{
        dbase.retrieve()
    })

    it('inserting into database', ()=>{
        dbase.insert()
    })
})
||||||| merged common ancestors
=======
const mysql = require('mysql')
const util = require('../')
describe('Database Connectivity', ()=>{
    it('fetching data from database', ()=>{
        
        
        var article={
            author : 'Shree Ramchandra',
            title : 'Node tutorial',
            body: 'foo bar'
        }
        
        var query= connection.query('select * from articles', function(err, result){
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        })
        connection.end()
    })
})
>>>>>>> 53c2bc9369a825f0a154d35638d2ad8be73faad0
