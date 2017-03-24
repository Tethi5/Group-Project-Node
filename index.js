const users = require('./users.json');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use = (bodyParser.json());

app.get('/api/users', function(req, res, next){
res.status(200).json(users);
});

app.delete('/api/users/:id', function(req, res, next){
  for (let i = 0; i < users.length; i++){
    if (users[i].id = req.params.id){
      users.splice(i - 1, 1);
    }
  }
  res.status(200).json(users);
});

app.listen(3000, function(){
  console.log('Listening on port 3000')
})
