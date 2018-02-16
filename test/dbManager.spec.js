const Manager = require('../dbManager');
const assert  = require('assert');
describe('sanity', ()=>{
  it('connect', async ()=>{
    debugger;
    db = await Manager.connect({});
    assert(db);
    return Manager.insertDocuments(db, []);
  })
})
