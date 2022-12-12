const dotenv = require('dotenv');
dotenv.config();
//mongoDB


const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

//Mongose on through connect mongodb
const { db_link } = require("../secrets");
mongoose.connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((db) => {
        console.log("User db conected");
    })
    .catch((err) => {
        console.log(err);
    });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: function () {
            return this.confirmPassword == this.password
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'restaurantowner', 'deliveryboy'],
        default: 'user'
    },
   profileImage:{
        type:String,
        default:'/public/users/default.webp'
    },
    resetToken: String,
});

userSchema.pre('save', function () {
    this.confirmPassword = undefined;
});

// userSchema.pre('save',async function(){
//     let salt=await bcrypt.genSalt();
//     let hashedSring=await bcrypt.hash(this.password,salt);
//     this.password=hashedSring;
// });

userSchema.methods.createResetToken = function () {
    const resetToken = createSecretKey.randomBytes(32).toString('hex');
    this.resetToken = resetToken;
    return resetToken;
}
userSchema.methods.resetPasswordHandler = function (password, confirmPassword) {
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.resetToken = undefined;
}
const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;