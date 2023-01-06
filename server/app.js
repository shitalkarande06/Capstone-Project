const express = require('express'); //intialized exrpess

const List = require('./models/listModel') //imported listModel from listmModel file.


// importing route files 
const foodItemsRoute = require('./routes/foodItemsRoute');
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

const cors = require('cors');

const app = express(); 
const db = require('./db.js')
app.use(cors());
app.use(express.json()); //for parsing req body which contains json data


// sending response to the server

app.get('/', (req, res)=>{
    res.send("server started");
});

// route for getting food-item list
app.use('/api/foodItems', foodItemsRoute)

// route for getting regiesterarion page
app.use('/api/users', userRoute)

// route for getting login page
app.use('/api/users/login', userRoute)

// route for getting payment details

app.use('/api/orders', ordersRoute)










// setting port to open server.
const port = process.env.PORT || 4040;

app.listen(port, ()=> "server running on port 4040");


