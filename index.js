//codigo del servidor
const cors = require('cors');
const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const mongoose = require('mongoose');
const path=require('path')

//settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views',path.join('./src','views'));
//conectando a la bd
mongoose.connect( `mongodb://localhost/dbcats`, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    console.log('Mongo Connected succesfull' );
    app.listen(1010, ()=>{
        console.log("Servidor conectado correctamente en el puerto "+1010);
    })    
  })
  .catch(err => {
    console.log(err);
  });



//midlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

//configurar servidor de nodejs
//static files
app.use(express.static(path.join('./src','views')));

//start server

app.listen(3000,() => {
    console.log("server on port", app.get('port'))
});

require('./src/resolvers/router')(app); 

