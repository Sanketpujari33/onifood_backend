const dotenv=require('dotenv');
dotenv.config();
//Mongose on through connect mongodb
const mongoose = require('mongoose');
const { db_link } = require("../secrets");

mongoose.connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(function (db) {
  // console.log(db);
  console.log("plan db connected");
})
.catch(function (err) {
  console.log(err);
});
const planSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: [20, "plan name should not exceed more than 20 characters"]
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price not entered"],
    },
    ratingsAverage: {
        type: Number,
    },
    discount: {
        type: Number,
        validate: [function () {
            return this.discount < 100;
        }, "discount should not exceed price"],
    },
    Reviews: {
        type: Number,
        default:0,
    }
});

// model
const planModel = mongoose.model("planModel", planSchema);

// (async function createPlan() {
//   let planObj = {
//     name: "SuperFood10",
//     duration: 30,
//     price: 1000,
//     ratingsAverage: 5,
//     discount: 20,
//   };
// let data= await planModel.create(planObj);
// console.log(data);
//   const doc = new planModel(planObj);
//   await doc.save();
// })();

//model
module.exports = planModel;