const dbase = require('../../../util/database.util')

//before hook is used before every describe block

describe('database actions : ', ()=>{
    this.retries(3)
    it('fetching from a database', ()=>{
        dbase.retrieve()
    })

    it('inserting into a database',()=>{
        dbase.insert()
    })
})
