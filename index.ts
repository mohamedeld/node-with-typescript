import * as http from 'http';

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type":"application/json"})
  const data = {
    products:[
      {name:"first"},
      {name:"second"},
      {name:"third"},
      {name:"fourth"},
    ]
  }
  res.end(JSON.stringify(data))
})


server.listen(9000,()=>{
  console.log("Server is running on port 9000");
})