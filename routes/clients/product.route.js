
const express= require('express');
const productController=require('../../controller/clients/product.controller')
const router=express.Router();

router.get('/product',productController.index)


module.exports=router;