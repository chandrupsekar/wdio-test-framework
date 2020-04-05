const mysql = require('mysql')
const db = require('../../../util/database.util')


describe('Database Connectivity', ()=>{
    it('fetching from the database', ()=>{
        db.retrieve()
    })

    it('inserting into the database', ()=>{
        db.insert()
    })
})