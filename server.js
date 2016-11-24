var express=require("express");
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'));


app.get('/',function(req,res){
  res.status(200).send('corriendo en v8');
});


server.listen(8080,function(){
  console.log('server corriendo...bajo node js');
  
  
  
});






