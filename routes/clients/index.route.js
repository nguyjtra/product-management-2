
const homeRoute=require('./home.route.js')
const productsRoute=require('./product.route.js')
module.exports.index=(app)=>{


    app.use('/',homeRoute)
    
    
    app.use('/product',productsRoute)
    
    
}