const dbase = require('../../../util/database.util')

//before hook is used before every describe block

describe('database actions : ', function(){
    this.retries(3)
    it('fetching from a database', function(){
        dbase.retrieve()
    })

    it('inserting into a database',function(){
        dbase.insert()
    })
})
