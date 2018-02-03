const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const local = "192.169.99.100"
const url = `mongodb://${proccess.env.MOGNO_HOST||localHost}:27017`;

// Database Name
const dbName = 'nodeK8s';
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('test');
  // Insert some documents
  collection.insertMany([
    {date : new Date}, {version : process.envVersion}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
