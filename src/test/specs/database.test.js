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