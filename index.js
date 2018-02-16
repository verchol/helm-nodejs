//mongodb for persistance
//web service simple api


const express = require('express');
const DB = require('./dbManager');
const app = express();

app.get('/prob', (req, res)=>{
   res.send(200);
})
app.get('/healthz', async (req, res)=>{
  try{
  db = await DB.connect({});
  let status = await DB.insertDocuments(db, []);
  res.send(status ? 200  : 500);
}catch(e){
    console.log(`exception {e}`);
    res.send(500);
}
})

app.get('/', (req, res)=>{
  console.log('demo nodejs-k8s service')
  res.send('demo nodejs-k8s service');
})
app.listen(process.env.PORT||3000, (err, data)=>{
  console.log(`connected to ${process.env.PORT || 3000}`);
})
