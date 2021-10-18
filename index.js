var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/user", (req, res, next) => {
  res.json([
    {
      'id': 1,
      'name': 'Jose',
      'age': 23,
      'email': 'jose.teste@teste.com',
      'phone': '1234567890',
      'user': 'jose.teste',
      'active': true
    },
    {
      'id': 2,
      'name': 'Jeremias',
      'age': 25,
      'email': 'jeremias.teste@teste.com',
      'phone': '223341234',
      'user': 'jeremias.teste',
      'active': false
    }
  ]);
 });