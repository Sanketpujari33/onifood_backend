const nodemailer = require('nodemailer');
// const {nodemailer_passkey}=require('./secrets');
// https - 443 http 8080
//userObj-> name email password

// async..await is not allowed in global scope, must use a wrapper

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail=async function sendMail(str,data){
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        host:"smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sanketpujari33@gmail.com',// generated ethereal user
            pass: 'vliluyzpapzzufsh'// generated ethereal password
        },
    });
    var Osubject,Otext,Ohtml;
    if(str=="signup"){
        Osubject=`Thanks you for signing ${data.name}`;
        Ohtml=`
        <h1>Welcome to FoodApp.com</h1>
        Hope you have a good time !
        Here are Your Details-
        Name -${data.name}
        Email -${data.email}
        `
    }else if(str=="resetPasswordLink"){
        Osubject=` Reset Password`;
        Ohtml=`<h1>FoodApp.com</h1>
        Here is your link to reset Your password !
        ${data.resetPasswordLink}`
    }
// send mail with defined transport object
let info = await transporter.sendMail({
    from: '"onifood App 🥫" <sanketpujari33@gmail.com>', // sender address
    to:data.email, // list of receivers
    subject: Osubject, // Subject line
    text: " Here is your link to reset your password !", // plain text body
    html:Ohtml, // html body
});
console.log("Message sent: %s", info.messageId);
};
