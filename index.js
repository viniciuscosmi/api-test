const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send([
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

 app.listen(process.env.PORT || 3000);