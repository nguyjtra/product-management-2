const express= require("express");
require('dotenv').config();
const app=express();

const port=process.env.PORT;


app.set('views','./views');
app.set('views engine','pug');

const routeClient=require('./routes/clients/index.route.js');

routeClient.index(app);


app.listen(port,()=>{
    console.log('running');
})