// Tech
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.json());
app.use(cors());


const postsRoute = require('./routes/posts')

app.use( '/posts', postsRoute);


//DB connection
mongoose.connect(
    process.env.DB_CONNECTION,
     { useNewUrlParser: true }, 
        () =>
            console.log('connected to DB'));

//Server

app.listen(3000);


app.get('/', (req, res) => {
    res.send('We are home')
})




