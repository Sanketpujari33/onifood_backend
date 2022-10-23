const _ = require('lodash');
const cookieParse = require('cookie-parser');
const express = require('express');
var cors=require('cors');

const userRouter = require('./Router/userRouter');
const planRouter=require('./Router/planRouter');
const reviewRouter=require('./Router/reviewRouter');
const bookingRouter=require('./Router/bookingRouter');


const app = express();
app.use(express.static('public/bulid'));
app.use(cors());
app.use(cookieParse());
app.use(express.json());

const port=process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server Listening on Port ${port}`);
});


//middleware Function post , front->json
app.use('/user', userRouter);
app.use('/plans', planRouter);
app.use('/review',reviewRouter);
app.use('/payment',bookingRouter);