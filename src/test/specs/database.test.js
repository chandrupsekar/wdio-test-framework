const mysql = require('mysql')
const dbase = require('../../../util/database.util')

describe('database actions : ', ()=>{
    this.retries(3)
    it('fetching from a database', ()=>{
        dbase.retrieve()
    })

    it('inserting into a database',()=>{
        dbase.insert()
    })
})