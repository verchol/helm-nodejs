const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
describe('test', ()=>{


// Connection URL
const localHost = "localhost"
const localMongoPort = "5000"
const url = `mongodb://${process.env.MONGO_HOST||localHost}:${process.env.MONGO_PORT || localMongoPort }`;
console.log(`url = ${url}`);
const dbName = 'nodeK8s';
const insertDocuments = async function(db, {data=[
  {date : new Date}, {version : process.envVersion}
]}) {
  // Get the documents collection
  const collection = db.collection('test');
  // Insert some documents
  return new Promise((resolve ,reject)=>{

  collection.insertMany(data, function(err, result) {
    assert.equal(err, null);
    console.log(JSON.stringify(result));
    assert.equal(2, result.result.n);
    assert.equal(2, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    return (err) ? reject(err) : resolve(result);
  });
})
}

// Database Name
it('connect to DB',  (done)=>{

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db,  ()=> {
    client.close();
    done();
  })
});
})
});
