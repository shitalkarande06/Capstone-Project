const mongoose = require("mongoose"); //initializing mongoose pakage.


// Schema for fetching foodItems collection
const listSchema = mongoose.Schema({
    name: {type: String, require},
    size : [],
    price : [],
    description:{type: String, require},
    category: {type: String, require},
    img: {type: String, require}

}, {
    timetamps: true,
})

const listModel = mongoose.model("Model", listSchema, "foodItems"); //model created

module.exports = listModel; //exporting into app.js file