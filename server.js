const express = require("express");
const app = express();

app.get('/api/whoami', function(req, res){
  const language = req.headers['accept-language'].toString().slice(0,5);
  const softwareString = req.headers['user-agent'].toString();
  const software = softwareString.slice(softwareString.search(/[(]/g)+1, softwareString.search(/[)]/g));
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const jsonResponse = {'ipaddress': ipaddress,
                      'language': language,
                      'software': software
  };
  res.json(jsonResponse);
})


app.listen(8080, function(){
  console.log("Running on 8080");
  
})

