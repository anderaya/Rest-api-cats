//codigo del servidor
const cors = require('cors');
const express=require('express');
const bodyParser = require('body-parser');
const app=express();


//settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//midlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());



app.listen(3000,() => {
    console.log("server on port", app.get('port'))
});

require('./src/resolvers/router')(app); 

