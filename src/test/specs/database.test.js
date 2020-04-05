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