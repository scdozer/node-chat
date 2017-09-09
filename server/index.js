var express = require('express');
var bodyParser =  require('body-parser');
var mc = require('./controllers/messages_controller')

var app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

const baseURL = "/api/messages";
app.get(baseURL, mc.read);
app.post(baseURL, mc.create);
app.put(`${baseURL}/:id`, mc.update);
app.delete(`${baseURL}/:id`, mc.delete);




app.listen(3000, () =>{
  console.log("Im a fucking good listener!");
});
