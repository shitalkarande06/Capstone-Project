const express = require("express");
const router = express.Router();
const List = require('../models/listModel');

router.get("/getFoodItems", async(req, res)=>{
    try{
        const foodItems = await List.find({})
        res.send(foodItems)
    }catch(error){
        return res.status(400).json({message:error});
    }
});

module.exports = router