const express = require ('express');
const MnogoClient = require('mongodb').MongoClient; //to interact with database
const bodyparser = require('body-parser');
const db = require('./db');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

MongoClient.connect(db.url , (err , database)=>{
if (err) return console.log(err)
const database =database.db("note-api")
require('./app/routes')(app,database);

app.listen(port, () =>{
    console.log('we are on port' + port);
});

})


