const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const path = require('path');
const connectToMongoDB = require('./config/mongoConnect');


//configuracion del motor de platilla Ejes
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//configuracion de los middlewares y rutas

app.listen(port,() => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`)
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
connectToMongoDB().then((client) =>{

}).catch((error) => {
    console.error("No se pudo connectar a MongoDB Atlas :", error);
})




app.use('/',indexRouter);
