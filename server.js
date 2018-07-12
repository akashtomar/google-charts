const express = require('express');
const app = express();
const router = require('./routes');

app.set('view engine', 'ejs');


app.use('/',router);

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('tune-in to 3000');
});