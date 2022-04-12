const express = require('express');
const path = require('path');
const app = express();
const port = 80;

const filePath = path.join(__dirname,"..");

console.log(filePath)

app.use(express.static(filePath));

app.listen(port,()=>{
  console.log(`serving notes website at port ${port}`);
})