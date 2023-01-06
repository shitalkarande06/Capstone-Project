const mongoose = require('mongoose'); //mongoose pacakge intialized

// Schema for fetching orders.
const orderSchema = mongoose.Schema({
    name:{type:String, require},
    email:{type : String, require},
    userid:{type: String, require},
    orderItems:[],
    shippingAddress:{type:Object},
    orderAmount:{type:Number, require},
    isDelivered:{type:Boolean, require, default:false},
    transactionId:{type: String, require}
},{
    timestamps: true
})

module.exports = mongoose.model('orders', orderSchema); //exporting model into app.js file.