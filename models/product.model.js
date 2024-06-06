const mongoose= require('mongoose');

const model = mongoose.model("product", {
    title :String,
    description :String,
    price :Number,
    discountPercentage:Number,
    stock:Number,
    thumbnail :String,
    status :String,
    position:Number,
    deleted:Boolean
   
},"produc-managements");
module.exports = model