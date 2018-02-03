//mongodb for persistance
//web service simple api


const express = require('express');
const app = express();
let sconnectToMong = (data)=>{

}
app.get('/prob', (req, res)=>{
   res.send(200);
})
app.get('/healthz', (req, res)=>{
  res.send(200);
  r
})

app.get('/', (req, res)=>{
  console.log('demo nodejs-k8s service')
  res.send('demo nodejs-k8s service');
})
app.listen(process.env.PORT||3000, (err, data)=>{
  console.log(`connected to ${process.env.PORT}`);
})
