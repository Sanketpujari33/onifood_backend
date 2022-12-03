const _ = require('lodash');
const cookieParse = require('cookie-parser');
const express = require('express');
const app = express();
var cors=require('cors');

const morgan=require('morgan')

require('dotenv').config()

app.use(morgan('dev'))

app.use(cors());

app.use(express.static('public/build'));

app.use(express.json());

const port=process.env.PORT || 5000;

app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});

app.use(cookieParse());

//mini app
const userRouter = require('./Routers/userRouter');
const planRouter = require('./Routers/planRouter');
const reviewRouter = require('./Routers/reviewRouter');
const bookingRouter=require('./Routers/bookingRouter');

//middleware Function post , front->json
//base route , router to use
app.use("/user", userRouter);
app.use("/plans", planRouter);
app.use("/review", reviewRouter);
app.use('/booking',bookingRouter);
// app.use("/auth", authRouter);