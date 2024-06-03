
const express= require('express');

const router=express.Router();

router.get('/product',(req,res)=>{
    res.render('client/pages/products/index.pug')
})


module.exports=router;