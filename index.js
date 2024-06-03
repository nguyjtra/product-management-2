const express= require("express");
const app=express();
const port=3000;


app.set('views','./views');
app.set('views engine','pug');

const routeClient=require('./routes/clients/index.route.js');

routeClient.index(app);


app.listen(port,()=>{
    console.log('running');
})